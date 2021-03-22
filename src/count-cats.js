const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0;
  matrix.forEach(subArray => {
    while (subArray.indexOf("^^") !== -1) {
      let cat = subArray.indexOf("^^");
      subArray.splice(cat, 1);
      counter++;
    }
  });
  return counter;
};
