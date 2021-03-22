const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let result = false;
  if (typeof sampleActivity === "string") {
    if (!isNaN(sampleActivity)) {
      sampleActivity = +sampleActivity;
      if (sampleActivity > 0 && sampleActivity <= 15) {
        result = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
        return result;
      };
    };
  };
  return result;
};
