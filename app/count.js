exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    const counter = () => {
      if(start <= end) {
        console.log(start++)
        timer = setTimeout(counter, 100)
      }
    }
    counter()
    return {
      cancel: () => {
        clearTimeout(timer)
      } 
    }
  }
};