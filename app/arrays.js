exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function (arr, item) {
    return arr.indexOf(item);
  },

  sum: function (arr) {
    return arr.reduce((a, b) => a + b, 0);
  },

  remove: function (arr, item) {
    return arr.filter((element) => element !== item);
  },

  removeWithoutCopy: function (arr, item) {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append: function (arr, item) {
    return arr.concat(item);
  },

  truncate: function (arr) {
    return arr.slice(0, -1);
  },

  prepend: function (arr, item) {
    return [item].concat(arr);
  },

  curtail: function (arr) {
    return arr.slice(1);
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    return arr.reduce((a, value) => (value === item ? a + 1 : a), 0);
  },

  duplicates: function (arr) {
    let duplicates = [];
    const sortArray = [...arr].sort();
    for (let i = 0; i < sortArray.length; i++) {
      if (sortArray[i + 1] === sortArray[i]) {
        duplicates.push(sortArray[i]);
      }
    }
    return duplicates.filter(
      (item, index) => duplicates.indexOf(item) === index
    ); // https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
  },

  square: function (arr) {
    return arr.map((element) => element ** 2);
  },

  findAllOccurrences: function (arr, target) {
    let answer = [];
    arr.forEach((element, index) => {
      if (element === target) {
        answer.push(index);
      }
    });
    return answer;
  },
};
