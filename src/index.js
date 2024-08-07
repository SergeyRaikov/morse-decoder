const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const encoder = {
    10: '.',
    11: '-',
  };

  const encodedLetters = expr
    .match(/.{10}/g)
    .map((elem) => elem.replace(/^0+/, ''))
    .map((elem) => elem.replace(/\*+/, ' '))
    .map((elem) => elem.match(/.{2}/g))
    .map((val) => (val === null ? [' '] : val));

  for (let i = 0; i < encodedLetters.length; i++) {
    for (let j = 0; j < encodedLetters[i].length; j++) {
      encodedLetters[i][j] = encoder[encodedLetters[i][j]];
    }
  }
  const output = encodedLetters
    .map((letter) => letter.join(''))
    .map((elem) => (elem ? MORSE_TABLE[elem] : ' '))
    .join('');
  return output;
}

module.exports = {
  decode,
};
