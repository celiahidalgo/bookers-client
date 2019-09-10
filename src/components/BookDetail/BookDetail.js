
import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";

import { getBooks } from "../../state/actions/books-actions";
import { actionFav } from "../../state/actions/user-actions";
import { getFav } from "../../state/actions/user-actions";


const _ = require('lodash');

const SearchForm = withStyles({
  root: {
    display: "flex",
    placeContent: "space-evenly",
    width: "100%",
    margin: "3rem 1rem"
  },
})(Grid);

class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      allBooks: this.props.books
    }
    this.bookChange = this.bookChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    console.log(this.props.books)
    this.getBooks();
  }
  bookChange(event) {
    this.setState({
      search: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const search = this.state.search;

    fetch(`http://localhost:3001/books?q=${search}`, {
      method: "GET"
    });
    let newBooks = _.filter(this.props.books, book => book.title.includes(this.state.search.toLowerCase()))
    this.setState({
      allBooks: newBooks
    });
  }
  async getBooks() {
    const req = await fetch("http://localhost:3001/books", {
      method: "GET"
    });
    const data = await req.json();
    console.log(data)
    this.props.getBooks(data);
    this.setState({
      allBooks: this.props.books
    })
  }

  async doFav(e) {
    e.preventDefault();
    const clickedBook = e.target.value
    console.log(clickedBook)
    const urlParams = new URLSearchParams(window.top.location.search);
    const id = urlParams.get("id");
    const req = await fetch(`http://localhost:3001/user/${id}/favs`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ "favorites": e.target.value })
    });

    const updatedFavs = await fetch(`http://localhost:3001/user/${id}/favs`, {
      method: "GET",
    });
    const data = await updatedFavs.json();
    // console.log(data)

    this.props.actionFav(data)

  }


  render() {

    return (
      // <div className={classes.root}>


      < Grid container >

        {
          this.state.allBooks &&
          this.state.allBooks.map((book, index) => (

            <Grid key={index} item xs={4}>

              <Card >
                <CardHeader
                  action={<IconButton aria-label="settings" />}
                  title={book.title}
                  subheader={book.publishedOn}
                />
                {/* <CardMedia
                  className={classes.media}
                  image={book.image}
                  title="Paella dish"
                /> */}
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>

                  <IconButton
                    aria-label="add to favorites"
                    onClick={this.doFav.bind(this)}
                    value={book._id}
                    id={book._id}


                  >
                    {this.props.favorites.find(fav => fav === book._id) ? <FavoriteIcon color="primary" /> : <FavoriteIcon />}
                    {/* {itemFav === true && */}
                    {/* <FavoriteIcon color="primary"/> */}
                    {/* } */}
                    {/* {itemFav === false &&
                      <FavoriteIcon

                      /> */}
                    {/* } */}



                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))
        }
      </Grid >
      // </div>
    );
  }
}
const mapStateToProps = store => ({
  books: store.books.books,
  favorites: store.user.favorites
});

const mapDispatchToProps = dispatch => ({
  getBooks: allBooks => dispatch(getBooks({ allBooks })),
  actionFav: user => dispatch(actionFav({ user })),
  getFav: user => dispatch(getFav({ user }))
});
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(Books));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookDetail);
// export default compose(
//   withStyles(styles),
//   connect(mapStateToProps, mapDispatchToProps)
// )(Books)