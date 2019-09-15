import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";

import Signin from "../../components/Signin";
import GoogleSignin from "../../components/GoogleSignin/GoogleSignin";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1)
  }
});

export class Login extends React.Component {

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
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <main>
                <h2>Bookers. Como un libro abierto.</h2>
                <h4>Bienvenido a Bookers, la app que por ahora te permite:</h4>
                <Signin />
                <GoogleSignin />
                <p>
                  ¿No tienes una cuenta?{" "}
                  <a href="http://localhost:3000/Signup">Crea una aquí.</a>
                </p>
              </main>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect()(withStyles(styles)(Login));
