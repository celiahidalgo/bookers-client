import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  button: {
    margin: theme.spacing(1)
  }
});

class Hello extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: " "
    };
    this.setName = this.setName.bind(this);
  }
  setName(username) {
    this.setState({
      username: username.user.username
    });
  }

  getData() {
    const urlParams = new URLSearchParams(window.top.location.search);
    const token = urlParams.get("token");

    let that = this;
    fetch(`http://localhost:3001/user?token=${token}`)
      .then(function(response) {
        if (response.status !== 200) {
          console.log("Hay un error " + response.status);
          return;
        }
        response.json().then(function(data) {
          that.setName(data);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <h2>Hola, {this.state.username}</h2>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Hello);
