const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (typeof str !== "string") {
    str = String(str);
  };

  let partOfResult = str;
  let result = "";

  if (options.addition || options.addition === false || options.addition === null) {

    if (typeof options.addition !== "string") {
      options.addition = String(options.addition);
    };

    if (!options.additionRepeatTimes) {
      options.additionRepeatTimes = 1;
    };

    if (!options.additionSeparator) {
      options.additionSeparator = "|";
    };

    for (let i = 0; i < options.additionRepeatTimes; i++) {

      if (i === options.additionRepeatTimes - 1) {
        options.additionSeparator = "";
      };

      partOfResult += options.addition + options.additionSeparator;
    };
  };

  if (options.repeatTimes) {

    if (!options.separator) {
      options.separator = "+";
    };

    for (let k = 0; k < options.repeatTimes; k++) {

      if (k === options.repeatTimes - 1) {
        options.separator = "";
      };
      result += partOfResult + options.separator;
    };
    return result;
  };
  return partOfResult;
};