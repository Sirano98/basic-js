const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }
  encrypt(message, key) {

    if (message && key) {

      message = message.toUpperCase();
      key = key.toUpperCase();

      let result = "",
        i,
        k = 0,
        size = message.length;

      for (i = 0; i < size; i++) {

        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {

          if (k >= key.length) {
            k = 0;
          };
          result += String.fromCharCode(((message.charCodeAt(i) + key.charCodeAt(k)) % 26) + 65);
          k++;
        } else {
          result += message[i];
        };

      };

      if (this.isDirect) {
        return result;
      };
      return result.split("").reverse().join("");

    } else {
      throw new Error();
    };
  }
  decrypt(message, key) {
    if (message && key) {
      message = message.toUpperCase();
      key = key.toUpperCase();

      let result = "",
        i,
        k = 0,
        size = message.length;

      for (i = 0; i < size; i++) {

        if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {

          if (k >= key.length) {
            k = 0;
          };
          result += String.fromCharCode(((message.charCodeAt(i) + 26 - key.charCodeAt(k)) % 26) + 65);
          k++;
        } else {
          result += message[i];
        };

      };

      if (this.isDirect) {
        return result;
      };

      return result.split("").reverse().join("");

    } else {
      throw new Error();
    };
  };
};

module.exports = VigenereCipheringMachine;
