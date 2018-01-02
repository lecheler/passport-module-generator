import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";

import InputField from "./InputField";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 10,
    marginBottom: 15,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function InputContainer(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs />
        <Grid item xs={8} md={10}>
          <Paper className={classes.paper}>
            <h2>section 1</h2>
            <InputField placeholder="add title" />
            <InputField placeholder="add title" />
            <InputField placeholder="add title" />
            <InputField placeholder="add title" />
          </Paper>
          <Paper className={classes.paper}>
            <h2>section 2</h2>
          </Paper>
          <Paper className={classes.paper}>
            <h2>section 3</h2>
          </Paper>
          <Paper className={classes.paper}>
            <h2>section 4</h2>
          </Paper>
        </Grid>
        <Grid item xs />
      </Grid>
      <Category type="stimulus" />
      <Category type="flipgrid" />
      <Category type="avenue" />
    </div>
  );
}

InputContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputContainer);
