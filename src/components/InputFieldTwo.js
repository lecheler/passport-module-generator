import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "material-ui/styles";

import MenuItem from "material-ui/Menu/MenuItem";
import TextField from "material-ui/TextField";

import Input from "material-ui/Input";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400
  },
  menu: {
    width: 400
  },
  input: {
    margin: theme.spacing.unit
  }
});

function InputField(props) {
  const handleInputChange = e => {
    props.handleChange({ value: e.target.value });
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <Input
        onChange={e => handleInputChange(e)}
        placeholder={props.placeholder}
        className={classes.input}
        inputProps={{
          "aria-label": "Add Title"
        }}
      />
    </div>
  );
}

InputField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputField);
