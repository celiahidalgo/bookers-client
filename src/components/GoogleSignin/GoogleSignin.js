import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = () => ({
  root: {
    padding: "0 20%"
  },
  paper: {
    position: "absolute",
    width: 400,
    border: "2px solid #000",
    outline: "none"
  },
  googleButton: {
    display: "flex"
  }
});

class GoogleSignin extends React.Component {
  userSuccess = response => {
    this.props.userSuccess(response, true);
  };

  userError = () => {
    console.log("error");
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          variant="outlined"
          href="http://localhost:3001/google"
          color="primary"
          className={classes.googleButton}
        >
          Google Login
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(GoogleSignin);
