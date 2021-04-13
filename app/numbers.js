exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    let value = num.toString(2);
    return bit > value.length ? 0 : Number(value.toString(2)[value.length - bit]);
    // https://stackoverflow.com/questions/53291899/find-the-value-of-given-bit-in-javascript
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    const value = num.toString(2)
    if (value.length < 8) {
      return '0'.concat(value)
    }return value
  },

  multiply: function(a, b) {
    return Number(parseFloat(a * b).toPrecision(b.toString().length - 2));
  }
};
