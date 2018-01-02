import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  menu: {
    width: 200
  }
});

function Title(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {/* On change update title */}
      <TextField />
    </div>
  );
}

Title.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Title);
