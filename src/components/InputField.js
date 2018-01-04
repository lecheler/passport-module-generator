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
// Convert to class component. DONE
// Add state constructor.
// update local state of input field.

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <Input
          onChange={this.props.handleChange}
          defaultValue={this.props.title}
          placeholder={this.props.placeholder}
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
