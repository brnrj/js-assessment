exports = typeof window === 'undefined' ? global : window;
exports.asyncAnswers = {
  async: function (value) {
    return new Promise((resolve, reject) => {
      if (typeof value === 'number') {
        reject(new Error('Invalid url'));
      } else {
        resolve(value);
      }
    });
  },

  manipulateRemoteData: function (url) {
    return fetch(url)
      .then(async(response) => {
        const data = await response.json()
        return data.people.map((element) => element.name).sort()
      })
  },
};