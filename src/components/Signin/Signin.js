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
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit} className={classes.loginForm}>
        <TextField
          label="Your name"
          id="mui-theme-provider-standard-input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <TextField
          label="Your password"
          id="mui-theme-provider-standard-input"
          value={this.state.value}
          onChange={this.handleChange}
          className={classes.flexItem}
        />

        <Button variant="contained" color="primary">
          Log in
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Signin);
