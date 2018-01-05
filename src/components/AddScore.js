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

function AddScore(props) {
  const handleAddScore = () => {
    if (props.scoring.count(props.catIndex) >= props.scoring.countMax) {
      alert("Slow your roll! Our master has set a limit of 5 total scores.");
    } else props.scoring.add(props.catIndex);
  };

  return (
    <div>
      <Button onClick={handleAddScore} color="primary">
        Add Score
      </Button>
    </div>
  );
}

export default withStyles(styles)(AddScore);
