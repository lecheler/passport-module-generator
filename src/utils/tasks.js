import { DefaultTasks } from "../config/defaultTasks";

export const getTask = (prevState, catIndex, taskIndex) => {
  return prevState.categories[catIndex].tasks[taskIndex];
};

export const addTask = (prevState, catIndex, taskType) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  newCategory.tasks.push(DefaultTasks[taskType]);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};

export const updateTask = (prevState, catIndex, taskIndex, taskUpdate) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  const prevTask = prevState.categories[catIndex].tasks[taskIndex];
  const newTask = {
    ...prevTask,
    ...taskUpdate
  };
  newCategory.tasks.splice(taskIndex, 1, newTask);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};

export const deleteTask = (prevState, catIndex, taskIndex) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  newCategory.tasks.splice(taskIndex, 1);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};

export const addRepeater = (prevState, catIndex, taskIndex, repeaterType) => {
  let defaultRepeater = {};
  let repeaterArray = "";
  switch (repeaterType) {
    case "resources":
      defaultRepeater = { type: "HTTP", url: "", label: "" };
      repeaterArray = "resources";
      break;
    case "assets":
      defaultRepeater = {
        type: "",
        extension: "",
        file: "",
        title: "",
        text: ""
      };
      repeaterArray = "assets";
      break;
    case "sliders":
      defaultRepeater = { max: "", label: "" };
      repeaterArray = "sliders";
      break;
    default:
      return {};
  }

  let prevTask = getTask(prevState, catIndex, taskIndex);
  let newRepeaters = [...prevTask[repeaterArray], defaultRepeater];
  let updatedTask = {
    ...prevTask
  };
  updatedTask[repeaterArray] = newRepeaters;
  return updateTask(prevState, catIndex, taskIndex, updatedTask);
};

export const updateRepeater = (
  prevState,
  catIndex,
  taskIndex,
  repeaterIndex,
  repeaterUpdate,
  repeaterType
) => {
  let prevTask = getTask(prevState, catIndex, taskIndex);
  let updatedRepeater = {
    ...prevTask[repeaterType][repeaterIndex],
    ...repeaterUpdate
  };
  let updatedRepeaterArray = [...prevTask[repeaterType]];
  updatedRepeaterArray.splice(repeaterIndex, 1, updatedRepeater);
  let updatedTask = {
    ...prevTask
  };
  updatedTask[repeaterType] = updatedRepeaterArray;
  return updateTask(prevState, catIndex, taskIndex, updatedTask);
};

export const deleteRepeater = (
  prevState,
  catIndex,
  taskIndex,
  repeaterIndex,
  repeaterType
) => {
  let prevTask = getTask(prevState, catIndex, taskIndex);
  let newResources = [...prevTask[repeaterType]];
  newResources.splice(repeaterIndex, 1);
  let updatedTask = {
    ...prevTask
  };
  updatedTask[repeaterType] = newResources;
  return updateTask(prevState, catIndex, taskIndex, updatedTask);
};

// export const addFlipGrid = (prevState, catIndex) => {
//   let newCategories = [...prevState.categories];
//   let newCategory = newCategories[catIndex];
//   newCategory.tasks.push(DefaultTasks.flipGrid);
//   newCategories.splice(catIndex, 1, newCategory);
//   return { categories: newCategories };
// };

// export const addStimulus = (prevState, catIndex) => {
//   let newCategories = [...prevState.categories];
//   let newCategory = newCategories[catIndex];
//   newCategory.tasks.push(DefaultTasks.stimulus);
//   newCategories.splice(catIndex, 1, newCategory);
//   return { categories: newCategories };
// };

// export const addAvenue = (prevState, catIndex) => {
//   let newCategories = [...prevState.categories];
//   let newCategory = newCategories[catIndex];
//   newCategory.tasks.push(DefaultTasks.avenue);
//   newCategories.splice(catIndex, 1, newCategory);
//   return { categories: newCategories };
// };

// export const addExistingAvenue = (prevState, catIndex) => {
//   let newCategories = [...prevState.categories];
//   let newCategory = newCategories[catIndex];
//   newCategory.tasks.push(DefaultTasks.avenueExisting);
//   newCategories.splice(catIndex, 1, newCategory);
//   return { categories: newCategories };
// };
