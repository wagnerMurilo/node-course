const randomWords = require('random-words');

const random = (number, callback) => {
    let text = '"'
    let words = randomWords(number)
    for (i = 0; i < number; i++) {
        text = text + ' ' + words[i];
      }

      text = text + '"'
      callback(undefined, text)
}


module.exports = random