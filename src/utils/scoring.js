export const addScore = (prevState, catIndex) => {
  const defaultScore = { max: "", label: "" };
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  newCategory.scoring.push(defaultScore);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};

export const updateScore = (prevState, catIndex, scoreIndex, scoreUpdate) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  const prevScore = prevState.categories[catIndex].scoring[scoreIndex];
  const newScore = {
    ...prevScore,
    ...scoreUpdate
  };
  newCategory.scoring.splice(scoreIndex, 1, newScore);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};

export const deleteScore = (prevState, catIndex, scoreIndex) => {
  let newCategories = [...prevState.categories];
  let newCategory = newCategories[catIndex];
  newCategory.scoring.splice(scoreIndex, 1);
  newCategories.splice(catIndex, 1, newCategory);
  return { categories: newCategories };
};
