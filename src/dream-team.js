const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members instanceof Array) {
    let result = "";
    let names = [];
    members.forEach(element => {
      if (typeof element === "string") {
        names.push(element.trim().toUpperCase());
      };
    });
    names.sort();
    names.forEach(name => {
      result += name[0];
    })
    return result;
  };
  return false;
};
