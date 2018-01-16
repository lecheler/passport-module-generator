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

function Score(props) {
  const { classes, scoring, catIndex, scoreIndex } = props;
  const scoreCount = scoring.count(catIndex);

  const handleMaxUpdate = input => {
    scoring.update(catIndex, scoreIndex, { max: input.value });
  };

  const handleLabelUpdate = input => {
    scoring.update(catIndex, scoreIndex, { label: input.value });
  };

  const handleDelete = () => {
    scoring.remove(catIndex, scoreIndex);
  };

  return (
    <div className={classes.root}>
      <InputString
        label={`Score ${scoreIndex + 1}`}
        handleChange={handleLabelUpdate}
        placeholder="Score Label"
        value={props.scoreContent.label}
      />
      <InputString
        label="Max"
        handleChange={handleMaxUpdate}
        placeholder="Score"
        value={props.scoreContent.max}
      />
      {scoreCount > 1 ? (
        <IconButton
          className={classes.button}
          aria-label="Delete"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      ) : (
        <div />
      )}
    </div>
  );
}

export default withStyles(styles)(Score);
