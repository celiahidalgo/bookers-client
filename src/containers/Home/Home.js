import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import { getUser, ADD_FAVORITE } from "../../state/actions/user-actions";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import Footer from "../../components/Footer";
import Books from "../../components/Books";
import User from "../../components/User";
import Header from "../../components/Header";

const Home = () => (
  <React.Fragment>
    <Header />
    {/* <User /> */}
    <Books key="books" />
    <Footer />
  </React.Fragment>
);

export default Home;

// class Home extends React.Component {

//   // componentWillMount() {
//   //   this.getUser();
//   // }
//   // async getUser() {
//   //   const urlParams = new URLSearchParams(window.top.location.search);
//   //   const id = urlParams.get("id");
//   //   const req = await fetch(`http://localhost:3001/user/${id}`, {
//   //     method: "GET"
//   //   });
//   //   const data = await req.json();

//   //   this.props.getUser(data);
//   // }
//   // async putFavs() {
//   //   const req = await fetch(`http://localhost:3001/user/favs`, {
//   //     method: "PUT",
//   //     body: {
//   //       favs: [1, 2]
//   //     }
//   //   });
//   //   const data = await req.json();

//   //   this.props.getUser(data);
//   // }
//   render() {

//     return (
//       <React.Fragment>
//        <User />
//         <main>
//           <div />
//           <Search />
//           <br />
//           <Books />

//         </main>

//       </React.Fragment>
//     );
//   }
// }
// // const mapStateToProps = store => ({
// //   username: store.user.username,
// //   email: store.user.email,
// //   picture: store.user.picture
// //   favorites: store.user.favoritesZ
// // });

// // const mapDispatchToProps = dispatch => ({
// //   getUser: user => dispatch(getUser({ user })),
// // });
// // export default connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(withStyles(styles)(Books));

// export default (Home);

//       // export default withStyles(styles)(User);

// // export default connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(Books);
