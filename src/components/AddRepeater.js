import React, { Component } from "react";
import Button from "material-ui/Button";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    margin: 20
  },
  button: {}
});

function AddRepeater(props) {
  const { classes, catIndex, taskIndex, type } = props;
  const handleAddRepeater = () => {
    props.tasks.addRepeater(catIndex, taskIndex, type);
  };

  return (
    <div>
      <Button onClick={handleAddRepeater} color="primary">
        Add
      </Button>
    </div>
  );
}

export default withStyles(styles)(AddRepeater);
