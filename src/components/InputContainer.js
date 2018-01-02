import React from "react";
import PropTypes from "prop-types";

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
        <Grid item xs={8} md={6}>
          <Paper className={classes.paper} />
        </Grid>
        <Grid item xs />
      </Grid>
    </div>
  );
}

InputContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputContainer);
