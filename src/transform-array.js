const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (arr instanceof Array) {
    const controlSequences = ["--discard-next", "--discard-prev", "--double-next", "--double-prev"];
    let transformedArray = [];

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {

        case "--discard-prev":
          if (i !== 0) {
            transformedArray.pop();
          };
          break;

        case "--discard-next":
          if (i !== arr.length - 1 && arr[i + 2] !== "--discard-prev") {
            i++;
          };
          break;

        case "--double-next":
          if (i !== arr.length - 1) {
            transformedArray.push(arr[i + 1], arr[i + 1]);
            i += 1;
          };
          break;

        case "--double-prev":
          if (i !== 0 && arr[i - 2] !== "--discard-next") {
            transformedArray.push(arr[i - 1]);
          };
          break;

        default:
          transformedArray.push(arr[i]);
      };
    };
    return transformedArray;
  } else {
    throw new Error();
  };
};