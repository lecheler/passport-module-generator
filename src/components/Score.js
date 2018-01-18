import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import InputString from "./InputString";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import { scoreSchema } from "../config/scoreSchema";

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

  const handleScoreUpdate = input => {
    let updateObject = {};
    updateObject[input.tag] = input.value;
    scoringUtils.update(catIndex, scoreIndex, updateObject);
  };

  const handleDelete = () => {
    scoringUtils.delete(catIndex, scoreIndex);
  };

  return (
    <div className={classes.root}>
      {scoreSchema.map((item, index) => {
        return (
          <InputString
            tag={item.tag}
            label={item.label}
            placeholder={item.placeholder}
            value={scoreContent[item.label]}
            handleChange={handleScoreUpdate}
            key={index}
          />
        );
      })};
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
