exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    const hasNumber = /\d/;
    return hasNumber.test(str)
    //https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript
  },

  containsRepeatingLetter: function(str) {
    var hasDuplicates = (/([a-zA-Z]).*?\1/)
    return hasDuplicates.test(str)
    // /https://stackoverflow.com/questions/20513274/detect-repeating-letter-in-an-string-in-javascript/20513352
  },

  endsWithVowel: function(str) {
    let endsVowel = /[aeiou]$/i;
    return endsVowel.test(str)
    // https://www.dreamincode.net/forums/topic/316400-detect-if-string-ends-in-a-vowel/
  },

  captureThreeNumbers: function(str) {
    let capture = (/\d{3}/).exec(str)
    if(capture) {
      return capture[0]
    }return false
    // https://stackoverflow.com/questions/21452555/extract-first-3-numbers-from-string
  },
    

  matchesPattern: function(str) {
    const checkPattern = (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/).test(str)
    return checkPattern
    //https://stackoverflow.com/questions/18375929/validate-phone-number-using-javascript
  },

  isUSD: function(str) {
    const checkAmountFormat = (/^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/).test(str)
    return checkAmountFormat
    //https://regexlib.com/REDetails.aspx?regexp_id=126
  }
};
