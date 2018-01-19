import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {},

  button: {
    margin: theme.spacing.unit,
    width: "100%"
  }
});

function AddCategory(props) {
  let { classes } = props;

  const handleAddCategory = () => {
    props.addCategory({ snap: "banana" });
  };

  return (
    <div>
      <Button
        onClick={handleAddCategory}
        raised
        color="primary"
        className={classes.button}
      >
        <AddIcon />
        Category
      </Button>
    </div>
  );
}

AddCategory.propTypes = {
  classes: PropTypes.object.isRequired,
  addCategory: PropTypes.func.isRequired,
  categoryCount: PropTypes.number.isRequired
};

export default withStyles(styles)(AddCategory);
