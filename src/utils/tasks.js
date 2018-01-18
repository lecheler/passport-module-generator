import DefaultTasks from "../config/defaultTasks";

export const addFlipGrid = (prevState, catIndex) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  newCategory.tasks.push(DefaultTasks.flipGrid);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};

export const addStimulus = (prevState, catIndex) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  newCategory.tasks.push(DefaultTasks.stimulus);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};

export const addAvenue = (prevState, catIndex) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  newCategory.tasks.push(DefaultTasks.avenue);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};

export const addExistingAvenue = (prevState, catIndex) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  newCategory.tasks.push(DefaultTasks.avenueExisting);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};
