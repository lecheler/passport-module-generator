import React, { Component } from "react";
import PropTypes from "prop-types";

import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import InputDropdown from "./InputDropdown";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";

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

class Category extends Component {
  render() {
    const { classes, index } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <h2>Category {index + 1}</h2>
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Category);
