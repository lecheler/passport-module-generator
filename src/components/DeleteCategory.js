import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import DeleteIcon from "material-ui-icons/Delete";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    marginTop: 30
  },
  button: {}
});

function DeleteCategory(props) {
  const { classes } = props;
  const handleDelete = () => {
    props.deleteCategory(props.index);
  };

  return (
    <div>
      <Button
        className={classes.button}
        onClick={handleDelete}
        fab
        aria-label="delete"
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}

export default withStyles(styles)(DeleteCategory);
