import React from "react";
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";

import SeeIcon from '@material-ui/icons/RemoveRedEyeOutlined';


const styles = theme => ({
  modal: {
    position: 'absolute',
    width: "75vw",
    top: "15vw",
    left: "8vw",
    backgroundColor: "white",
    padding: "2em",
    display: "flex",
    flexDirection: "row",
    maxHeight: "400px",
    overflowY: "scroll"

  },
  bookImg: {
    padding: "1em",
    height: "200px",
    objectFit: "cover"
  },
  detailFooter: {
    backgroundColor: "#f2f2f2",
    padding: ".5em 1em",
    borderRadius: "20px",
    color: "grey",
    fontSize: ".9em",
    marginBottom: "20px"
  }
});

class BookDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openBook: false,
      title: "",
      description: "",
      author: "",
      publishedOn: "",
      image: ""
    }
  }

  async handleOpen() {
    const req = await fetch(`http://localhost:3001/books/${this.props.id}`, {
      method: "GET"
    });
    const data = await req.json();
    console.log(data)

    await this.setState({
      openBook: true,
      title: data.book.title || "",
      description: data.book.description || "",
      author: data.book.author || "",
      publishedOn: data.book.publishedOn || "",
      image: (data.book.image.thumbnail) || "",
    });
    console.log(data.book.image.thumbnail)
  };

  handleClose() {
    this.setState({ openBook: false });
  };

  render() {
    const { classes } = this.props;
    return (<div>
      <IconButton type="button" onClick={this.handleOpen.bind(this)}>
        <SeeIcon />
      </IconButton>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.openBook}
        onClose={this.handleClose.bind(this)}
      >
        {/* style={modalStyle()} */}
        <Grid className={classes.modal}>
          <img className={classes.bookImg} alt={this.state.title} src={this.state.image} />
          <div>
            <h2 id="simple-modal-title">{this.state.title}</h2>
            <p >
              {this.state.description}
            </p>
            <div className={classes.detailFooter}>
              <p >
                {this.state.author}
              </p>
              <p >
                {this.state.publishedOn}
              </p>
            </div>
          </div>
        </Grid>
      </Modal>
    </div>)
  }
}


export default withStyles(styles)(BookDetail);