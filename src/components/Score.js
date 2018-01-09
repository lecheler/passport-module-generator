import React from "react";
import PropTypes from "prop-types";
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

function Score(props) {
  const { classes, scoring, catIndex, scoreIndex } = props;

  const handleMaxUpdate = input => {
    props.scoring.update(catIndex, scoreIndex, { max: input.value });
  };

  const handleLabelUpdate = input => {
    props.scoring.update(catIndex, scoreIndex, { label: input.value });
  };

  const handleDelete = () => {
    props.scoring.remove(catIndex, scoreIndex);
  };

  return (
    <div className={classes.root}>
      <InputFieldTwo
        label={`Score ${scoreIndex + 1}`}
        handleChange={handleLabelUpdate}
        placeholder="Score Label"
        value={props.scoreContent.label}
      />
      <InputFieldTwo
        label="Max"
        handleChange={handleMaxUpdate}
        placeholder="Score"
        value={props.scoreContent.max}
      />
      <IconButton
        className={classes.button}
        aria-label="Delete"
        onClick={handleDelete}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default withStyles(styles)(Score);
