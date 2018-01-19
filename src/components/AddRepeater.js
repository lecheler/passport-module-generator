import React from "react";
import PropTypes from "prop-types";
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
  const { classes, catIndex, taskIndex, repeaterType, name, taskUtils } = props;
  const handleAddRepeater = () => {
    taskUtils.addRepeater(catIndex, taskIndex, repeaterType);
  };

  return (
    <div className={classes.root}>
      <Button onClick={handleAddRepeater} color="primary">
        Add {name}
      </Button>
    </div>
  );
}

AddRepeater.propTypes = {
  classes: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  taskIndex: PropTypes.number.isRequired,
  repeaterType: PropTypes.string.isRequired,
  taskUtils: PropTypes.object.isRequired
};

export default withStyles(styles)(AddRepeater);
