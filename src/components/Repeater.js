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
    updateObject[input.tag] = input.value;

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
        tag={item.tag}
        label={item.label}
        placeholder={item.placeholder}
        value={value[item.label]}
        handleChange={handleRepeaterUpdate}
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
