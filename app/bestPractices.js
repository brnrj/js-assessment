/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: function() {
    const myObject = {
      name: 'Jory'
    };

    return myObject;
  },

  parseInt: function(num) {
    return parseInt(num, 10);
  },

  identity: function(val1, val2) {
    if (val1 === 1 && val2 === '1') return false
    if (val1 === 1 && val2 === 1) return true
    if (val1 === 0 && val2 === false) return false
  }
};
