const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (Object.prototype.toString.call(date) === "[object Date]") {

    let month = date.getMonth();

    if (month >= 2 && month <= 4) {
      month = "spring";
    } else if (month >= 5 && month <= 7) {
      month = "summer";
    } else if (month >= 8 && month <= 10) {
      month = "autumn";
    } else {
      month = "winter";
    };

    return month;

  } else if (!date) {
    return "Unable to determine the time of year!";
  } else {
    throw new Error();
  }
};
