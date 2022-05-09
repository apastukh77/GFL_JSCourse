const { I } = inject();

module.exports = {
  collectEmailPassword(uniqueEmail, uniquePasswd) {
    let collectedEmailPassword = uniqueEmail + " : " + uniquePasswd + "\n";
    return collectedEmailPassword.toString();
  },

  createUniqueEmail() {
    uniqueEmail = Date.now() + "@test.org.ca";
    return uniqueEmail;
  },

  createUniquePasswd() {
    var generatedPasswd = [],
      random = 0,
      endPasswd = "";
    var passwdArray = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    var passwdMaxLength = "12";
    for (var i = 0; i <= Number(passwdMaxLength) - 1; i++) {
      random = Math.floor(Math.random() * passwdArray.length);
      generatedPasswd[i] = passwdArray[random];
    }
    uniquePasswd = generatedPasswd.toString().replace(/[\s.,%]/g, "");
    return uniquePasswd;
  },

  // createUniquePasswd() {
  //   uniquePasswd = this.password();
  //   return uniquePasswd;
  // },
};
