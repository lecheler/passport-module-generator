import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";

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
    margin: theme.spacing.unit
  }
});

function InputString(props) {
  const handleInputChange = e => {
    props.handleChange({
      value: e.target.value,
      tag: props.tag,
      type: props.type
    });
  };

  const { classes } = props;
  return (
    <div className={classes.root}>
      <TextField
        label={props.label}
        placeholder={props.placeholder}
        value={props.value}
        multiline
        rowsMax="4"
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
