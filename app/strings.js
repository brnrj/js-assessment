exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let count = 0;
    let result = ''
    for (var i = 0; i < str.length; i++) {
      if(str[i] === str[i + 1]) {
        count++;
        if(count < amount) {
          result += str[i]
        }
      }else {
        count = 0
        result += str[i]
      }
      // https://stackoverflow.com/questions/37668775/reducing-duplicate-characters-in-a-string-to-a-given-minimum/37669151
    }
    return result;
  },

  wordWrap: function(str, cols) {
    let result = ''
    let array = [];
    array = str.split(' ');
    result = array[0];

    for (let i = 1; i < array.length; i++) {
      if(array[i].length > cols) {
        result += '\n' + array[i];
      }else {
        if(result.length + array[i].length > cols){
          result += '\n' + array[i];
        }else {
          result += ' ' + array[i]
        }
      }
    }
    return result
    // https://stackoverflow.com/questions/36037657/javascript-strings-wrap
  },

  reverseString: function(str) {
    return str.split('').reverse().join('')
  }
};
