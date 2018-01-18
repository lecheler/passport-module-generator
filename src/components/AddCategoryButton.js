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

    // if (props.categoryCount >= 4) {
    //   alert(
    //     "Whoa there partner! Our supreme leader has set a limit of 4 categories."
    //   );
    // } else props.addCategory();
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
