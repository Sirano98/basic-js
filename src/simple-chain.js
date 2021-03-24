const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    value = `( ${value === undefined ? '' : value} )`;
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (Number.isInteger(position)) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error();
    };
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let finalChain = this.chain.join('~~');
    this.chain = [];
    return finalChain;
  }
};

module.exports = chainMaker;
