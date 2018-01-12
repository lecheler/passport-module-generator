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
  let { classes, handleDownload } = props;

  const handleClick = () => {
    handleDownload();
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Button
          onClick={handleClick}
          raised
          color="accent"
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
