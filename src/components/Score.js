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
  const { classes, scoreContent, catIndex, scoreIndex, scoringUtils } = props;
  const scoreCount = scoringUtils.count(catIndex);

  const handleMaxUpdate = input => {
    scoringUtils.update(catIndex, scoreIndex, { max: input.value });
  };

  const handleLabelUpdate = input => {
    scoringUtils.update(catIndex, scoreIndex, { label: input.value });
  };

  const handleDelete = () => {
    scoringUtils.delete(catIndex, scoreIndex);
  };

  return (
    <div className={classes.root}>
      <InputString
        label={`Score ${scoreIndex + 1}`}
        handleChange={handleLabelUpdate}
        placeholder="Score Label"
        value={scoreContent.label}
      />
      <InputString
        label="Max"
        handleChange={handleMaxUpdate}
        placeholder="Score"
        value={scoreContent.max}
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

Score.propTypes = {
  classes: PropTypes.object.isRequired,
  scoringUtils: PropTypes.object.isRequired,
  scoreContent: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  scoreIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(Score);
