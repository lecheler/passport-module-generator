import React, { Component } from "react";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    margin: 20
  },
  button: {}
});

function DeleteCategory(props) {
  const { classes, catIndex, tasks } = props;

  const handleAddStimulus = () => {
    tasks.addStimulus(catIndex);
  };

  const handleAddFlipGrid = () => {
    tasks.addFlipGrid(catIndex);
  };

  const handleAddAvenue = () => {
    tasks.addAvenue(catIndex);
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        raised
        color="default"
        onClick={handleAddStimulus}
      >
        <AddIcon className={classes.rightIcon} />
        Stimulus
      </Button>
      <Button
        className={classes.button}
        raised
        color="default"
        onClick={handleAddFlipGrid}
      >
        <AddIcon className={classes.rightIcon} />
        FlipGrid
      </Button>
      <Button
        className={classes.button}
        raised
        color="default"
        onClick={handleAddAvenue}
      >
        <AddIcon className={classes.rightIcon} />
        Avenue
      </Button>
    </div>
  );
}

export default withStyles(styles)(DeleteCategory);
