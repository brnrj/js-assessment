exports = typeof window === 'undefined' ? global : window;
exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => {
      if(typeof value === 'number') {
        reject(new Error('Invalid url'))
      } else {
        resolve(value)
      }
    })
  },
  
  manipulateRemoteData: function(url) {
    const data = $.ajax(url).then((response) => response.people.map((element) => element.name).sort())
    return data
  }
  // https://api.jquery.com/jquery.ajax/
}