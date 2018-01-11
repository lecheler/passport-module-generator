import React, { Component } from "react";
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
    marginRight: theme.spacing.unit
    // width: 400
  },
  menu: {
    // width: 400
  },
  input: {
    margin: theme.spacing.unit
  }
});

function InputString(props) {
  const handleInputChange = e => {
    props.handleChange({
      value: e.target.value,
      label: props.label,
      type: props.type
    });
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <TextField
        label={props.label}
        multiline
        rowsMax="4"
        value={props.value}
        onChange={e => handleInputChange(e)}
        className={classes.textField}
        margin="normal"
      />
    </div>
  );
}

InputString.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputString);
