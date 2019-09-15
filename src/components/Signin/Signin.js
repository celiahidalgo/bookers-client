import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { Redirect } from 'react-router-dom'

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

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", id: "", loggedIn: false };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  setUsers(users) {
    this.setState({
      users: users.user,
    });
  }
  getData() {
    let that = this;
    fetch(`http://localhost:3001/user`)
      .then(function (response) {
        if (response.status !== 200) {
          console.log("Hay un error " + response.status);
          return;
        }
        response.json().then(function (data) {
          that.setUsers(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }

  componentWillMount() {
    this.getData();
  }

  emailChange(e) {
    this.setState({
      email: e.target.value
    });
  }
  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  async handleSubmit(e) {
    e.preventDefault(e);
    const mail = this.state.email;
    const pass = this.state.password;
    const user = this.state.users.find(user => user.email === mail && user.password === pass)
    if (!user) {
      alert(`Tu email o contraseña son incorrectos, vuelve a intentarlo`);
      window.location = "http://localhost:3000";
    }

    this.setState({
      loggedIn: true,
      id: user._id
    })
    console.log(this.state)


  }

  render() {
    const { classes } = this.props;
    if (this.state.loggedIn === true) {
      const id = this.state.id
      return <Redirect to={`/Home?id=${id}&`} />

    }
    else
      return (
        <form onSubmit={(e) => this.handleSubmit(e)} className={classes.loginForm}>
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
