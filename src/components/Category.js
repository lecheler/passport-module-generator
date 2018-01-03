import React, { Component } from "react";
import PropTypes from "prop-types";

import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import InputDropdown from "./InputDropdown";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import InputField from "./InputField";
import InputFieldTwo from "./InputFieldTwo";
import DeleteCategory from "./DeleteCategory";

const styles = theme => ({
  root: {
    // flexGrow: 1,
    marginTop: 30
  },
  paper: {
    padding: 10,
    marginBottom: 15,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  deleteBar: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "flex-end"
  }
});

class Category extends Component {
  updateCatTitle = e => {
    // console.log(e);
    let newCategory = { ...this.props.catContent };
    newCategory.title = e.value;
    this.props.updateCategory(this.props.index, newCategory);
  };

  render() {
    const { classes, index, catContent } = this.props;
    // console.log("catContent", catContent);
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.deleteBar}>
            <DeleteCategory
              index={index}
              deleteCategory={this.props.deleteCategory}
            />
          </div>
          <h2>Category {index + 1}</h2>
          <h4>State Title: {catContent.title}</h4>
          <InputFieldTwo
            handleChange={this.updateCatTitle}
            placeholder="Category Title"
            value={catContent.title}
          />
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Category);
