import React from "react";
import TaskAvenue from "./TaskAvenue";
import TaskFlipgrid from "./TaskFlipgrid";
import TaskStimulus from "./TaskStimulus";
import InputDropdown from "./InputDropdown";

function Category(props) {
  switch (props.type) {
    case "stimulus":
      return <TaskStimulus />;
      break;
    case "flipgrid":
      return <TaskFlipgrid />;
      break;
    case "avenue":
      return <TaskAvenue />;
      break;
    default:
      return <h1>Haaaalp</h1>;
  }
}

export default Category;
