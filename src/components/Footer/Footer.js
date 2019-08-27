import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import OpacityIcon from "@material-ui/icons/Opacity";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  footer: {
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    minHeight: "40px",
    backgroundColor: "white"
  },
  smallerText: {
    fontSize: "10px",
    display: "flex",
    justifyContent: "center"
  },
  dropIcon: {
    fontSize: "12px",
    padding: "0 5px"
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <div className="footer">
          <p className={classes.footer}>
            Bookers © 2019 - Al rights reserved
            <span className={classes.smallerText}>
              Slowly made with
              <OpacityIcon color="primary" className={classes.dropIcon} />
              {/* and <InboxIcon /> */}
            </span>
          </p>
        </div>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Footer);
