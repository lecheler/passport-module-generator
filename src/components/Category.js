import React, { Component } from "react";
import PropTypes from "prop-types";

import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import InputDropdown from "./InputDropdown";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import Divider from "material-ui/Divider";
import InputField from "./InputField";
import InputFieldTwo from "./InputFieldTwo";
import DeleteCategory from "./DeleteCategory";
import AddScore from "./AddScore";

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
    justifyContent: "space-between",
    marginBottom: "10px"
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
            <div>Category: {catContent.order + 1}</div>
            <DeleteCategory
              index={index}
              deleteCategory={this.props.deleteCategory}
            />
          </div>
          <Divider />
          {/*<h2>Category {index + 1}</h2>*/}
          <InputFieldTwo
            handleChange={this.updateCatTitle}
            placeholder="Category Title"
            value={catContent.title}
          />
          <AddScore index={index} addScore={this.props.addScore} />
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Category);
