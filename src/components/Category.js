import React, { Component } from "react";
import PropTypes from "prop-types";
import FlipMove from "react-flip-move";

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
import Score from "./Score";

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
    const { classes, index, catContent, scoring } = this.props;
    // console.log("catContent", catContent);
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.deleteBar}>
            <InputFieldTwo
              label={`Category ${catContent.order + 1} Title`}
              handleChange={this.updateCatTitle}
              placeholder="Category Title"
              value={catContent.title}
            />
            <DeleteCategory
              index={index}
              deleteCategory={this.props.deleteCategory}
            />
          </div>
          <Divider />
          {/*<h2>Category {index + 1}</h2>*/}

          <FlipMove
            duration={300}
            easing="ease-out"
            enterAnimation="elevator"
            maintainContainerHeight={true}
          >
            {this.props.catContent.scoring.map((score, scoreIndex) => (
              <Score
                scoring={this.props.scoring}
                scoreContent={this.props.scoring.get(index, scoreIndex)}
                catIndex={index}
                scoreIndex={scoreIndex}
              />
            ))}
          </FlipMove>
          {scoring.count(index) < scoring.countMax ? (
            <AddScore catIndex={index} scoring={this.props.scoring} />
          ) : null}
        </Paper>
      </div>
    );
  }
}

Category.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Category);
