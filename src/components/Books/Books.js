// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     textAlign: "center"
//   },
//   button: {
//     margin: theme.spacing(1)
//   },
//   searchForm: { display: "block" }
// });

// class Books extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       books: {book: {title: title}}
//     };
//     this.setInfo = this.setInfo.bind(this);
//   }
//   setInfo(books) {
//     console.log("heyy" + books.books[1].title);
//     this.setState({
//       title: books.books.title
//     });
//   }

//   getData() {
//     let that = this;
//     fetch(`http://localhost:3001/books/all`)
//       .then(function(response) {
//         if (response.status !== 200) {
//           console.log("Hay un error " + response.status);
//           return;
//         }
//         response.json().then(function(data) {
//           console.log(data);
//           that.setInfo(data);
//         });
//       })
//       .catch(function(err) {
//         console.log("Fetch Error :-S", err);
//       });
//   }

//   componentWillMount() {
//     this.getData();
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <div className={classes.root}>
//         <Grid container>
//           <Grid item xs={12}>
//             <h2>!!! {this.state.title}</h2>
//             {/* <ol>
//               {books.map(book => (
//                 <li>{reptile}</li>
//               ))}
//             </ol> */}
//             {/* <datalist id="books">
//               {this.state.books.map(book => (
//                 <option>{book.title}</option>
//               ))}
//             </datalist> */}
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(Books);

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { getBooks } from "../../state/actions/books-actions";
import { actionFav } from "../../state/actions/books-actions";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";

class Books extends React.Component {
  componentWillMount() {
    this.getBooks();
    this.postBooks();
  }
  async getBooks() {
    const req = await fetch("http://localhost:3001/books", {
      method: "GET"
    });
    const data = await req.json();
    console.log(data)
    this.props.getBooks(data);
  }
  async postBooks() {
    const req = await fetch("http://localhost:3001/books", {
      method: "POST"
    });
    const data = await req.json();
    console.log(data)
    this.props.getBooks(data);
  }

  actionFav = () => (console.log(this.props.books))

  //   // console.log(this.props.books[e.target.value]._id);
  //   console.log(this)
  //   // this.props.setState({ favorite: true });
  //   // await fetch(`/update-fav/${this.props._id}`, {
  //   //   method: "PATCH",
  //   //   // headers: { 'Content-Type':'application/x-www-form-urlencoded' },
  //   //   favorite: true
  //   // });
  //   // actionFav();

  // };

  render() {
    // const { classes } = this.props;

    const classes = withStyles(theme => ({
      card: {
        maxWidth: 345
      },
      media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
      }
    }));

    return (
      // <div className={classes.root}>
      <Grid container>
        {this.props.books &&
          this.props.books.map((book, index) => (
            <Grid key={index} item xs={4}>
              <Card className={classes.card}>
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
                    onClick={this.actionFav}
                    value={book._id}
                  >
                    <FavoriteIcon
                      color={book.favorite === true ? "primary" : "secondary"}
                    />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      // </div>
    );
  }
}
const mapStateToProps = store => ({
  books: store.books.books
});

const mapDispatchToProps = dispatch => ({
  getBooks: allBooks => dispatch(getBooks({ allBooks }))
});
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(withStyles(styles)(Books));

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
