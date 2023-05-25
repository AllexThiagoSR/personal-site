const uniqueProject = (array) => {
  let finalArray = [];
  array.forEach((item) => {
    if (finalArray.length === 0) {
      finalArray = [item];
      return undefined;
    }
    if (finalArray.every(({name}) => name !== item.name)) {
      finalArray = [...finalArray, item];
      return undefined;
    }
  });
  return finalArray;
};

export default uniqueProject;