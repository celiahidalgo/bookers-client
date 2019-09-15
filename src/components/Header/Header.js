
import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import { getUser } from "../../state/actions/user-actions";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

import logo from "../../img/bookers-logo.png"

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  logo: {
    width: "200px"
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  user: {
    display: "flex",
    alignItems: "center"
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }
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
    const { classes } = this.props;

    const urlParams = new URLSearchParams(window.top.location.search);
    const id = urlParams.get("id");
    const token = urlParams.get("token");
    return (
      < Grid container className={classes.root}>
        <AppBar
          position="fixed">
          <Toolbar className={classes.navbar}>
            <a className={classes.logo} href={`http://localhost:3000/Home?id=${id}&token=${token}`}>
              <img alt="bookers logo" src={logo} className={classes.logo} />
            </a>
            <div className={classes.user}>
              <Avatar alt={this.props.username} src={this.props.picture} />
              <Typography variant="p" >
                {this.props.username}
              </Typography>
            </div>
          </Toolbar>
        </AppBar>

        <Typography variant="p" >
          {this.props.username}
        </Typography>
      </Grid >
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


export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
