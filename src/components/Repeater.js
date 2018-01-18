import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import InputString from "./InputString";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";

const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing.unit
  }
});

const repeaterArray = [];

function Repeater(props) {
  const {
    classes,
    catIndex,
    taskIndex,
    repeaterIndex,
    repeaterType,
    repeaterSchema,
    value,
    taskUtils
  } = props;

  const handleRepeaterUpdate = input => {
    let updateObject = {};
    updateObject[input.label] = input.value;

    taskUtils.updateRepeater(
      catIndex,
      taskIndex,
      repeaterIndex,
      updateObject,
      repeaterType
    );
  };

  const handleDeleteRepeater = () => {
    taskUtils.deleteRepeater(catIndex, taskIndex, repeaterIndex, repeaterType);
  };

  const repeaterInputs = repeaterSchema.map((item, index) => {
    return (
      <InputString
        label={item.label}
        handleChange={handleRepeaterUpdate}
        placeholder={item.label}
        value={value[item.label]}
        key={index}
      />
    );
  });

  return (
    <div className={classes.root}>
      {repeaterInputs}
      <IconButton
        className={classes.button}
        aria-label="Delete"
        onClick={handleDeleteRepeater}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

Repeater.propTypes = {
  classes: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  taskIndex: PropTypes.number.isRequired,
  repeaterType: PropTypes.string.isRequired,
  taskUtils: PropTypes.object.isRequired
};

export default withStyles(styles)(Repeater);
