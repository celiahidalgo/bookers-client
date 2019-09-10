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
//   searchForm: { display: "block", marginTop: "4em" }
// });

// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       search: ""
//     };
//     this.bookChange = this.bookChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     // this.setInfo = this.setInfo.bind(this);
//   }
//   // setInfo(data) {
//   //   console.log(data);
//   //   this.setState({
//   //     books: data.book
//   //   });
//   // }

//   bookChange(event) {
//     this.setState({
//       search: event.target.value
//     });
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     const search = this.state.search;
//     fetch(`http://localhost:3001/books?q=${search}`, {
//       method: "GET"
//     });
//   }
//   // getData() {
//   //   fetch(`http://localhost:3001/books/all`)
//   //     .then(response => response.json())
//   //     // then we update the users state
//   //     .then(data =>
//   //       this.setState({
//   //         books: data,
//   //         favorite: false
//   //       })
//   //     );

//   //   // .then(function(response) {
//   //   //   if (response.status !== 200) {
//   //   //     console.log("Hay un error " + response.status);
//   //   //     return;
//   //   //   }
//   //   //   response.json().then(function(data) {
//   //   //     console.log(data);
//   //   //     this.setInfo(data);
//   //   //   });
//   //   // })
//   //   // .catch(function(err) {
//   //   //   console.log("Fetch Error :-S", err);
//   //   // });
//   // }

//   // componentWillMount() {
//   //   this.getData();
//   // }
//   render() {
//     const { classes } = this.props;
//     return (
//       <div className={classes.root}>
//         <Grid container>
//           <Grid item xs={12}>
//             <form onSubmit={this.handleSubmit} className={classes.searchForm}>
//               <TextField
//                 label="Busca tu libro favorito"
//                 id="book"
//                 value={this.state.search || ""}
//                 onChange={this.bookChange}
//                 name="book"
//                 type="text"
//               />
//             </form>
//             {/* <h2>Hola, {this.state.search}</h2>
//             <datalist id="books">
//               {() => this.state.books.map(book => <p>{book.title}</p>)}
//             </datalist> */}
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(Search);
