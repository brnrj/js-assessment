exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/Constructor

  iterate: function(obj) {
    const values = Object.values(obj);
    const keys = Object.keys(obj)
    return [`${keys[0]}: ${values[0]}`, `${keys[1]}: ${values[1]}`]
  }
};
