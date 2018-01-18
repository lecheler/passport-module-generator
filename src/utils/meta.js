export const updateMeta = (prevState, metaObject) => {
  const { tag, value } = metaObject;
  const updateObject = {};
  updateObject[tag] = value;
  console.log(updateObject);
  return updateObject;
};
