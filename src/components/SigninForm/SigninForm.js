// import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import TextField from "@material-ui/core/TextField";

// const styles = makeStyles(theme => ({
//   paper: {
//     position: "absolute",
//     width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 4),
//     outline: "none"
//   }
// }));

// class SigninForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("A name was submitted: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <Paper>
//         <h2 id="modal-title">Text in a modal</h2>
//         <form onSubmit={this.handleSubmit}>
//           <TextField
//             className={styles.margin}
//             label="Your name"
//             id="mui-theme-provider-standard-input"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//           <TextField
//             className={styles.margin}
//             label="Your password"
//             id="mui-theme-provider-standard-input"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//           {/* <label>
//             Name:
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input type="submit" value="Submit" /> */}
//         </form>
//       </Paper>
//     );
//   }
// }

// export default withStyles(styles)(SigninForm);
