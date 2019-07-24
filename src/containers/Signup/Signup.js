import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    margin: "20px 0"
  },
  customForm: {
    display: "flex",
    flexDirection: "column",
    padding: "5% 20%"
  }
});

export class Signup extends React.Component {
  constructor() {
    super();
    this.state = { username: "", email: "", password: "" };
    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  usernameChange(event) {
    this.setState({
      username: event.target.value
    });
  }
  emailChange(event) {
    this.setState({
      email: event.target.value
    });
  }
  passwordChange(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const name = this.state.username;
    const mail = this.state.email;
    const pass = this.state.password;
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        email: mail,
        password: pass
      })
    });
    if (name && mail && pass) {
      alert(`Hola, ${name}, ahora tienes que logarte`);
      window.location = "http://localhost:3000";
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <main>
                <h2>Crea una cuenta</h2>
                <form
                  type="submit"
                  className={classes.customForm}
                  onSubmit={this.handleSubmit}
                >
                  <TextField
                    className={styles.margin}
                    label="Username"
                    id="username"
                    value={this.state.username}
                    name="username"
                    type="text"
                    onChange={this.usernameChange}
                  />
                  <TextField
                    className={styles.margin}
                    label="Email"
                    id="email"
                    value={this.state.email}
                    name="email"
                    type="text"
                    onChange={this.emailChange}
                  />
                  <TextField
                    className={styles.margin}
                    label="Password"
                    id="password"
                    value={this.state.password}
                    name="password"
                    type="text"
                    onChange={this.passwordChange}
                  />
                  <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Sign up
                  </Button>
                </form>
              </main>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
