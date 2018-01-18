export const addCategory = (prevState, test) => {
  let defaultCategory = {
    order: prevState.categories.length,
    title: "",
    scoring: [{ max: "", label: "" }],
    tasks: []
  };
  let prevCategories = prevState.categories;
  let newCategories = [...prevCategories, defaultCategory];
  return { categories: newCategories };
};

export const updateCategory = (prevState, index, newCategory) => {
  let newCategories = [...prevState.categories];
  newCategories.splice(index, 1, newCategory);
  return { categories: newCategories };
};

export const validateCategory = catContent => {
  const validateObject = object => {
    return Object.keys(object).every(key => {
      if (Array.isArray(object[key])) {
        return object[key].every(itemInArray => {
          return validateObject(itemInArray);
        });
      } else return object[key] ? true : false;
    });
  };
  const validScores = catContent.scoring.every(score => {
    return validateObject(score);
  });
  const validTasks = catContent.tasks.every(task => {
    return validateObject(task);
  });
  return catContent.title && validScores && validTasks ? true : false;
};

export const deleteCategory = (prevState, index) => {
  let newCategories = [...prevState.categories];
  newCategories.splice(index, 1);

  let reorderedCategories = newCategories.map((category, index) => {
    return { ...category, order: index };
  });
  return { categories: reorderedCategories };
};
