// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import { connect } from "react-redux";
// import Grid from "@material-ui/core/Grid";
// import Avatar from '@material-ui/core/Avatar';
// import { getUser } from "../../state/actions/user-actions";

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';



// class User extends React.Component {


//   render() {

//     return (
//       <React.Fragment>
//         <AppBar
//           position="fixed">
//           <Toolbar>
//             <Typography variant="h6" noWrap >
//               Bookers
//           </Typography>
//           </Toolbar>
//         </AppBar>
//         {/*         
//         <Typography variant="p" >
//           {this.props.username}
//         </Typography> */}
//       </React.Fragment>
//     );
//   }
// }


// export default (User);

//       // export default withStyles(styles)(User);

// // export default connect(
// //   mapStateToProps,
// //   mapDispatchToProps
// // )(Books);
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import { getUser } from "../../state/actions/user-actions";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



class Header extends React.Component {

  componentWillMount() {
    this.getUser();
  }
  async getUser() {
    const urlParams = new URLSearchParams(window.top.location.search);
    const id = urlParams.get("id");
    const token = urlParams.get("token");
    const req = await fetch(`http://localhost:3001/user/${id}?token=${token}`, {
      method: "GET"
    });
    const data = await req.json();

    this.props.getUser(data);
  }

  render() {

    return (
      < Grid container >
        <AppBar
          position="fixed">
          <Toolbar>
            <Typography variant="h6" noWrap >
              Bookers
        </Typography>

            <Avatar alt={this.props.username} src={this.props.picture} />
            <Typography variant="p" >
              {this.props.username}
            </Typography>

          </Toolbar>
        </AppBar>

        <Typography variant="p" >
          {this.props.username}
        </Typography>
      </Grid>
    );
  }
}
const mapStateToProps = store => ({
  username: store.user.username,
  email: store.user.email,
  picture: store.user.picture,
  // favorites: store.user.favorites
});

const mapDispatchToProps = dispatch => ({
  getUser: user => dispatch(getUser({ user })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

      // export default withStyles(styles)(User);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Books);
