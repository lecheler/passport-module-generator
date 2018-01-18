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
import InputString from "./InputString";
import DeleteCategory from "./DeleteCategory";
import AddScore from "./AddScore";
import AddTask from "./AddTask";
import Score from "./Score";
import Task from "./Task";
import Icon from "material-ui/Icon";
import CheckCircle from "material-ui-icons/CheckCircle";

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
    marginBottom: "10px",
    alignItems: "center"
  }
});

// const validateCategoryContent = content => {
//   const validateObject = object => {
//     return Object.keys(object).every(key => {
//       if (Array.isArray(object[key])) {
//         return object[key].every(itemInArray => {
//           return validateObject(itemInArray);
//         });
//       } else return object[key] ? true : false;
//     });
//   };
//   const validScores = content.scoring.every(score => {
//     return validateObject(score);
//   });
//   const validTasks = content.tasks.every(task => {
//     return validateObject(task);
//   });
//   return content.title && validScores && validTasks ? "green" : "lightgray";
// };

class Category extends Component {
  isCategoryValid = () => {
    return this.props.validate(this.props.catContent) ? "green" : "lightgray";
  };

  updateCatTitle = e => {
    // console.log(e);
    let newCategory = { ...this.props.catContent };
    newCategory.title = e.value;
    this.props.updateCategory(this.props.catIndex, newCategory);
  };

  render() {
    const {
      classes,
      catIndex,
      catContent,
      scoring,
      scoringUtils,
      taskUtils,
      categoryCount,
      validate
    } = this.props;

    // console.log("catContent", catContent);
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.deleteBar}>
            <Icon style={{ color: this.isCategoryValid() }}>
              <CheckCircle />
            </Icon>

            <h2>Category {catIndex + 1}</h2>

            {categoryCount > 1 ? (
              <DeleteCategory
                catIndex={catIndex}
                deleteCategory={this.props.deleteCategory}
              />
            ) : (
              <div />
            )}
          </div>
          <Divider />
          <InputString
            label="Title"
            handleChange={this.updateCatTitle}
            placeholder="Title"
            value={catContent.title}
          />
          <Divider />
          {/*<h2>Category {catIndex + 1}</h2>*/}
          <h3>Scores</h3>
          <FlipMove
            duration={100}
            easing="ease-out"
            enterAnimation="elevator"
            maintainContainerHeight={true}
          >
            {catContent.scoring.map((score, scoreIndex) => (
              <Score
                scoringUtils={scoringUtils}
                scoreContent={scoringUtils.get(catIndex, scoreIndex)}
                catIndex={catIndex}
                scoreIndex={scoreIndex}
                key={scoreIndex}
              />
            ))}
          </FlipMove>
          {scoringUtils.count(catIndex) < scoringUtils.countMax ? (
            <AddScore catIndex={catIndex} scoringUtils={scoringUtils} />
          ) : null}
          <Divider />
          <h3>Tasks</h3>
          <FlipMove
            duration={100}
            easing="ease-out"
            enterAnimation="elevator"
            maintainContainerHeight={true}
          >
            {catContent.tasks.map((score, taskIndex) => (
              <Task
                taskUtils={taskUtils}
                taskContent={catContent.tasks[taskIndex]}
                catIndex={catIndex}
                taskIndex={taskIndex}
                key={taskIndex}
              />
            ))}
          </FlipMove>

          {taskUtils.count(catIndex) < taskUtils.countMax ? (
            <AddTask catIndex={catIndex} taskUtils={taskUtils} />
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
