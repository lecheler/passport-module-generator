import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import DeleteIcon from "material-ui-icons/Delete";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    marginTop: 30
  },
  button: {}
});

function DeleteCategory(props) {
  const { classes, catIndex, deleteCategory } = props;
  const handleDelete = () => {
    deleteCategory(catIndex);
  };

  return (
    <div>
      <Button
        className={classes.button}
        onClick={handleDelete}
        fab
        aria-label="delete"
      >
        <DeleteIcon />
      </Button>
    </div>
  );
}

DeleteCategory.propTypes = {
  classes: PropTypes.object.isRequired,
  catIndex: PropTypes.number.isRequired,
  deleteCategory: PropTypes.func.isRequired
};

export default withStyles(styles)(DeleteCategory);
