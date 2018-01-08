import React from "react";
import { withStyles } from "material-ui/styles";
import InputFieldTwo from "./InputFieldTwo";
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
    type,
    repeaterSchema,
    value
  } = props;

  const handleRepeaterUpdate = input => {
    let updateObject = {};
    updateObject[input.label] = input.value;
    console.log("BUG HERE >>> ", updateObject);
    props.tasks.updateRepeater(
      catIndex,
      taskIndex,
      repeaterIndex,
      updateObject,
      type
    );
  };

  const handleDeleteRepeater = () => {
    props.tasks.removeRepeater(catIndex, taskIndex, repeaterIndex, type);
  };

  const repeaterInputs = repeaterSchema.map((item, index) => {
    return (
      <InputFieldTwo
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

export default withStyles(styles)(Repeater);
