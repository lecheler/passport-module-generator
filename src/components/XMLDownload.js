import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";

const styles = theme => ({
  root: {},
  paper: {
    padding: 10,
    marginBottom: 15,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing.unit,
    width: "100%"
  }
});

function XMLDownload(props) {
  let { classes, handleDownload, valid } = props;
  // console.log(valid);
  const handleClick = () => {
    if (!valid.meta) {
      alert("Looks like you forgot something in the Meta section.");
    }
    if (!valid.categories) {
      alert("Looks like there's an error in the Categories section.");
    }
    let allGood = valid.meta && valid.categories;
    if (allGood) {
      handleDownload();
    }
  };

  const isEverythingValid = () => {
    let isValid = valid.meta && valid.categories;
    return isValid ? "accent" : "default";
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Button
          onClick={handleClick}
          raised
          color={isEverythingValid()}
          style={{ width: "100%", maxWidth: "630px" }}
        >
          Download XML File
        </Button>
      </Paper>
    </div>
  );
}

XMLDownload.propTypes = {
  classes: PropTypes.object.isRequired,
  handleDownload: PropTypes.func.isRequired
};

export default withStyles(styles)(XMLDownload);
