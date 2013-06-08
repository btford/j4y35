// Create the Phrase translations arrays

var j4y = {};

j4y.jargon = {
  'crap':            'carp',
  'dude':            'dood',
  'hacker':          'haxor',
  'hacks':           'hax',
  'you':             'joo',
  'cool':            'kewl',
  'oh my god':       'omg',
  'fear':            'ph43',
  'power':           'powwah',
  'own':             'pwn',
  'elite':           'leet',
  'for the win':     'ftw',
  'oh really':       'o rly',
  'good game':       'gg'
};

// Create the Letter translations arrays
j4y.letters = {
  'n':    '/|\\|',
  'b':    '8',
  'e':    '3',
  'g':    '9',
  'h':    '|-|',
  'p':    '|*',
  'm':    '/\\/\\',
  'l':    '1',
  'o':    '0',
  's':    '5',
  't':    '7',
  'u':    '|_|',
  'x':    '><',
  'w':    '\\/\\/',
  'z':    '2',
  'c':    '(',
  'a':    '4',
  'j':    '_|',
  'i':    '|',
  'v':    '\\/'
};

j4y.leet = (function () {
  var translate = function (dict, eng) {
    var leet = eng;
    Object.keys(dict).forEach(function (word) {

      // escape funny chars
      word = word.replace(new RegExp('(\\' + [
          '/', '.', '*', '+', '?', '|', '$',
          '(', ')', '[', ']', '{', '}', '\\'
        ].join('|\\') + ')', 'g'), '\\$1');

      leet = leet.replace(new RegExp(word, "gi"), dict[word]);
    });
    return leet;
  };

  return function (eng) {
    var leet = eng;

    [j4y.jargon, j4y.letters].forEach(function (dict) {
      leet = translate(dict, eng);
    });

    return leet;
  };
}());

// CommonJS
if (module) {
  module.exports = j4y;
}
