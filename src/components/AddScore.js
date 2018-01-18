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

function AddScore(props) {
  const { scoringUtils, catIndex } = props;

  const handleAddScore = () => {
    if (scoringUtils.count(catIndex) >= scoringUtils.countMax) {
      alert("Slow your roll! Our master has set a limit of 5 total scores.");
    } else scoringUtils.add(catIndex);
  };

  return (
    <div>
      <Button onClick={handleAddScore} color="primary">
        Add Score
      </Button>
    </div>
  );
}

AddScore.propTypes = {
  classes: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  scoringUtils: PropTypes.object.isRequired
};

export default withStyles(styles)(AddScore);
