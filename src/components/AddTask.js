import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    margin: 20
  },
  logo: { maxWidth: 50 },
  logoLite: { maxWidth: 50, opacity: 0.5 },
  button: { display: "block" }
});

function AddTask(props) {
  const { classes, catIndex, taskUtils } = props;

  const handleAddStimulus = () => {
    taskUtils.add(catIndex, "stimulus");
  };

  const handleAddFlipGrid = () => {
    taskUtils.add(catIndex, "flipGrid");
  };

  const handleAddAvenue = () => {
    taskUtils.add(catIndex, "avenue");
  };

  const handleAddExistingAvenue = () => {
    taskUtils.add(catIndex, "avenueExisting");
  };

  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        raised
        color="default"
        onClick={handleAddStimulus}
      >
        <img src="./stimulus.svg" className={classes.logo} />
        <div>Stimulus</div>
      </Button>
      <Button
        className={classes.button}
        raised
        color="default"
        onClick={handleAddFlipGrid}
      >
        <img src="./flipgrid.svg" className={classes.logo} />
        <div>FlipGrid</div>
      </Button>
      <Button
        className={classes.button}
        raised
        color="default"
        onClick={handleAddAvenue}
      >
        <img src="./avenue.svg" className={classes.logo} />
        <div>Avenue</div>
      </Button>
      <Button
        className={classes.button}
        raised
        color="default"
        onClick={handleAddExistingAvenue}
      >
        <img src="./avenue-existing.svg" className={classes.logoLite} />
        <div>Avenue</div>
        <div>(Existing)</div>
      </Button>
    </div>
  );
}

AddTask.propTypes = {
  classes: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  taskUtils: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTask);
