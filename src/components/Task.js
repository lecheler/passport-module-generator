import React, { Component } from "react";
import PropTypes from "prop-types";
import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import InputDropdown from "./InputDropdown";
import TaskAvenueExisting from "./TaskAvenueExisting";

class Task extends Component {
  displayTask() {
    switch (this.props.taskContent.type) {
      case "stimulus":
        return <TaskStimulus {...this.props} />;
        break;
      case "flipgrid":
        return <TaskFlipgrid {...this.props} />;
        break;
      case "avenue":
        return <TaskAvenue {...this.props} />;
        break;
      case "avenue-existing":
        return <TaskAvenueExisting {...this.props} />;
      default:
        return <h1>Haaaalp</h1>;
    }
  }
  render() {
    return this.displayTask();
  }
}

export default Task;
