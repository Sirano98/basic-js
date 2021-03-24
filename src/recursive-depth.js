const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxLevel = 1;
    let level;
    arr.map(elem => {
      if (elem instanceof Array) {
        level = this.calculateDepth(elem) + 1;
        if (maxLevel < level) {
          maxLevel = level;
        };
      };
    });
    return maxLevel;
  };
};