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

function AddCategory(props) {
  let { classes } = props;

  const handleAddCategory = () => {
    if (props.categoryCount >= 4) {
      alert(
        "Whoa there partner! Our supreme leader has set a limit of 4 categories."
      );
    } else
      props.addCategory({
        order: props.categoryCount,
        title: "",
        scoring: [],
        tasks: []
      });
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Button
          onClick={handleAddCategory}
          raised
          color="primary"
          style={{ width: "100%", maxWidth: "630px" }}
        >
          <AddIcon />
          Category
        </Button>
      </Paper>
    </div>
  );
}

AddCategory.propTypes = {
  classesasdg: PropTypes.object.isRequired
};

export default withStyles(styles)(AddCategory);
