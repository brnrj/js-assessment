exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj)
  },

  functionFunction: function(str) {
    return function(value) {
      return str + ', ' + value
    }
  },

  makeClosures: function(arr, fn) {
    let result = [];
    const resultFn = function(curr){
      return function(){
        return fn(curr)
      }
    }
    arr.forEach((item) => {
      result.push(resultFn(item))
    });
    return result
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Closures
  },

  partial: function(fn, str1, str2) {
    return function(value){
      return fn(str1, str2, value)
    }
  },

  useArguments: function(...args) {
    let total = 0
    args.forEach((element) => {
      total += element
    })
    return total
  },

  callIt: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1, arguments.length)
    return fn.apply(_,args) 
    //https://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work
    //https://stackoverflow.com/questions/2141520/javascript-variable-number-of-arguments-to-function
    //https://medium.com/@jhawleypeters/javascript-call-vs-apply-vs-bind-61447bc5e989#:~:text=The%20Basics%3A%20Call%20vs%20Apply&text=The%20difference%20between%20call,following%20have%20the%20same%20effect.
  },

  partialUsingArguments: function(fn) {
    let args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      let newArgs = args.concat(Array.prototype.slice.call(arguments))
      return fn.apply(_, newArgs)
    }
  },

  curryIt: function(fn) {
    
  }
};
