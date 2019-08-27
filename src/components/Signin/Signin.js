import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = () => ({
  loginForm: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    padding: "5% 20%"
  },
  flexItem: {
    marginBottom: "10px"
  }
});

// Esto es todo de pega, por ahora

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setUsers(users) {
    console.log(users);
    this.setState({
      users: [users.user]
    });
  }
  getData() {
    let that = this;
    fetch(`http://localhost:3001/user`)
      .then(function(response) {
        if (response.status !== 200) {
          console.log("Hay un error " + response.status);
          return;
        }
        response.json().then(function(data) {
          that.setUsers(data);
        });
      })
      .catch(function(err) {
        console.log("Fetch Error :-S", err);
      });
  }

  componentWillMount() {
    this.getData();
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

  handleSubmit(event) {
    event.preventDefault();
    const mail = this.state.email;
    const pass = this.state.password;
    // if (mail === users.user.email)
  }
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classes.loginForm}>
        <TextField
          label="Tu email"
          id="email"
          value={this.state.email}
          onChange={this.emailChange}
        />
        <TextField
          label="Tu contraseña"
          id="password"
          value={this.state.password}
          onChange={this.passwordChange}
          className={classes.flexItem}
        />

        <Button variant="contained" color="primary" type="submit">
          Log in
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Signin);
