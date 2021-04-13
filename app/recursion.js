exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    const values = Object.values(data.files);
    const valuesHTML = values[0];
    const valuesJS = values[1].files;
    const valuesVendor = valuesJS[3].files;
    const valuesCSS = values[2].files;
    if (!dirName) {
      return [
        valuesHTML,
        ...valuesJS.slice(0, 3),
        ...valuesVendor,
        ...valuesCSS,
      ];
    }
    return [...valuesJS.slice(0, 3), ...valuesVendor];
  },

  permute: function (arr) {
    let result = [];
    if (arr.length === 0) return [];
    if (arr.length === 1) return [arr];

    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
      const remainingNumsPermuted = recursionAnswers.permute(remainingNums);
      for (let j = 0; j < remainingNumsPermuted.length; j++) {
        const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
        result.push(permutedArray);
      }
      //https://medium.com/weekly-webtips/step-by-step-guide-to-array-permutation-using-recursion-in-javascript-4e76188b88ff
    }
    return result;
  },

  fibonacci: function (n) {
    if (n < 2) {
      return n;
    }
    return (
      recursionAnswers.fibonacci(n - 1) + recursionAnswers.fibonacci(n - 2)
    );
    //https://www.codigofonte.com.br/dicas/como-solucionar-uma-sequencia-fibonacci-usando-javascript
  },

  validParentheses: function (n) {
    const res = [];
    const addParanthesis = (cur, open, close) => {
      if (cur.length === n * 2) {
        res.push(cur);
        return;
      }
      if (open < n) {
        addParanthesis(cur + '(', open + 1, close);
      }
      if (close < open) {
        addParanthesis(cur + ')', open, close + 1);
      }
    };
    addParanthesis('', 0, 0);
    return res;
  },
  // https://codereview.stackexchange.com/questions/221973/generate-all-possible-combination-of-n-pair-parentheses
};
