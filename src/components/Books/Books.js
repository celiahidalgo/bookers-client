import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";

import { getBooks } from "../../state/actions/books-actions";
import { actionFav, deleteFav } from "../../state/actions/user-actions";
import { getFav } from "../../state/actions/user-actions";
import BookDetail from "../BookDetail";
const _ = require('lodash');

const SearchForm = withStyles({
  root: {
    display: "flex",
    placeContent: "space-evenly",
    width: "100%",
    marginTop: "4rem",
    marginBottom: "1rem"
  },
})(Grid);
const BooksContainer = withStyles({
  root: {
    height: "90vh",
    overflowY: "scroll"
  },
})(Grid);
const CardImg = withStyles({
  root: {
    height: "150px",
  },
})(CardMedia);
const StyledCard = withStyles({
  root: {
    margin: "1rem",
  },
})(Card);

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // openBook: false,
      q: null,
      allBooks: this.props.books,
    }
    this.bookChange = this.bookChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.getBooks();
    this.postBooks();
  }
  bookChange(event) {
    this.setState({
      q: event.target.value
    });
  }
  async handleSubmit(e) {
    e.preventDefault();
    const search = this.state.q;
    this.postSearchBooks(search)
    await this.getFilteredBooks(search)
    fetch(`http://localhost:3001/books?q=${search}`, {
      method: "GET"
    });
    let newBooks = _.filter(this.props.books, book => book.title.includes(this.state.q.toLowerCase()))
    this.setState({
      allBooks: newBooks
    });
    console.log(this.state)
  }
  async getFilteredBooks(search) {
    const req = await fetch(`http://localhost:3001/books?q=${search}`,
      {
        method: "GET"
      });

    const data = await req.json();
    console.log(data)
  }
  async getBooks() {
    const query = this.state.q
    console.log(query)
    const req = await fetch("http://localhost:3001/books", {
      method: "GET"
    });
    const data = await req.json();

    this.props.getBooks(data);
    console.log(data)
    this.setState({
      allBooks: this.props.books
    })
  }

  async postSearchBooks(search) {
    console.log(search)
    const req = await fetch(`http://localhost:3001/books?q=${search}`, {
      method: "POST",
    });
    const data = await req.json();
    this.props.getFilteredBooks(data);
    console.log(data)
    this.setState({
      allBooks: this.props.books
    })
  }
  async postBooks() {
    const req = await fetch(`http://localhost:3001/books`, {
      method: "POST",
    });
    const data = await req.json();

    console.log(data)

  }

  async doFav(e) {
    e.preventDefault(e)
    const clickedBook = e.currentTarget.value
    console.log(clickedBook)
    const urlParams = new URLSearchParams(window.top.location.search);
    const id = urlParams.get("id");
    if (this.props.favorites.find(fav => fav === clickedBook)) {
      const req = await fetch(`http://localhost:3001/user/${id}/favs`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({ "favorites": e.currentTarget.value })
      });
      console.log("fetching fav" + req)
      const updatedFavs = await fetch(`http://localhost:3001/user/${id}/favs`, {
        method: "GET",
      });
      const data = await updatedFavs.json();
      console.log(data)
      this.props.deleteFav(data)
    }
    else {
      const req = await fetch(`http://localhost:3001/user/${id}/favs`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({ "favorites": e.currentTarget.value })
      });
      const updatedFavs = await fetch(`http://localhost:3001/user/${id}/favs`, {
        method: "GET",
      });
      console.log("getting fav after put fav" + req)
      const data = await updatedFavs.json();
      console.log(data)
      this.props.actionFav(data)
    }
  }

  render() {
    return (
      < BooksContainer container >
        <SearchForm >
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Busca tu libro favorito"
              id="book"
              value={this.state.q || ""}
              onChange={this.bookChange}
              name="book"
              type="text"
            />
          </form>
        </SearchForm>
        {
          this.state.allBooks &&
          this.state.allBooks.map((book, index) => (
            <Grid key={index} item xs={4}>
              <StyledCard >
                <CardImg
                  image={book.image.thumbnail}
                  title="Cover"
                />
                <CardHeader
                  action={<IconButton aria-label="settings" />}
                  title={book.title}
                  subheader={book.author}
                />
                <CardActions disableSpacing>

                  <IconButton
                    aria-label="add to favorites"
                    onClick={this.doFav.bind(this)}
                    value={book._id}
                    ref={book._id}
                  >
                    {this.props.favorites.find(fav => fav === book._id) ? <FavoriteIcon color="secondary" /> : <FavoriteIcon />}
                  </IconButton>
                  <BookDetail id={book._id} />
                </CardActions>
              </StyledCard>
            </Grid>
          ))
        }
      </BooksContainer>

    );
  }
}
const mapStateToProps = store => ({
  books: store.books.books,
  // filteredBooks: store.books.filteredBooks,
  favorites: store.user.favorites
});

const mapDispatchToProps = dispatch => ({
  getBooks: books => dispatch(getBooks({ books })),
  // getFilteredBooks: allBooks => dispatch(getFilteredBooks({ allBooks })),
  actionFav: user => dispatch(actionFav({ user })),
  deleteFav: user => dispatch(deleteFav({ user })),
  getFav: user => dispatch(getFav({ user }))
});
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(Books));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
// export default compose(
//   withStyles(styles),
//   connect(mapStateToProps, mapDispatchToProps)
// )(Books)