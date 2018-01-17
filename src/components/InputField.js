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
    width: "100%"
  },
  menu: {
    // width: 400
  },
  input: {
    margin: theme.spacing.unit,
    width: "100%"
  }
});

class InputField extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <TextField
          label={this.props.label}
          onChange={this.props.handleChange}
          defaultValue={this.props.defaultValue}
          placeholder={this.props.placeholder}
          multiline
          rowsMax="4"
          className={this.props.classes.input}
          inputProps={{
            "aria-label": "Add Title"
          }}
        />
      </div>
    );
  }
}

InputField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputField);
