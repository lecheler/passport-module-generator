import React from "react";
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

function InputArea(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      {/* On change update title */}
      <Input
        placeholder="Add Title"
        className={classes.input}
        inputProps={{
          "aria-label": "Add Title"
        }}
      />
    </div>
  );
}

InputArea.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputArea);
