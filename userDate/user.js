const { I } = inject();

module.exports = {
  getUser: function () {
    let user = {
      firstName: "Jon-Paul",
      get getFirstName() {
        return this.firstName;
      },

      lastName: "O'Sullivan",
      get getLastName() {
        return this.lastName;
      },

      state: "Alabama",
      get getState() {
        return this.state;
      },

      city: "Birmingham",
      get getCity() {
        return this.city;
      },

      zipCode: "35242",
      get getZipCode() {
        return this.zipCode;
      },

      address1: "2nd St. 34",
      get getAddress1() {
        return this.address1;
      },

      address2: "2nd St. 35",
      get getAddress2() {
        return this.address2;
      },

      company: "TrackEnsure Inc",
      get getCompany() {
        return this.company;
      },

      additionalInfo: "testtest1",
      get getAdditionalInfo() {
        return this.additionalInfo;
      },

      homePhone: "+1727282892",
      get getHomePhone() {
        return this.homePhone;
      },

      mobilePhone: "+1727287097",
      get getMobilePhone() {
        return this.mobilePhone;
      },

      getCreateUniqueEmail: function () {
        uniqueEmail = Date.now() + "@test.org.ca";
        return uniqueEmail;
      },

      getCreateUniquePasswd: function () {
        var generatedPasswd = [],
          random = 0;
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
        let passwdMaxLength = "12";
        for (let i = 0; i <= Number(passwdMaxLength) - 1; i++) {
          random = Math.floor(Math.random() * passwdArray.length);
          generatedPasswd[i] = passwdArray[random];
        }
        uniquePasswd = generatedPasswd.toString().replace(/[\s.,%]/g, "");
        return uniquePasswd;
      },

      alias: function () {
        let aliasArr = ["2nd St.34", "Birmingham", "AL", "US", "35242"];
        let aliasStr = aliasArr.toString().replace(/[\s.,%]/g, " ");
        return aliasStr;
      },

      gender: function () {
        let arr = Math.random() * 100;
        let num = Math.trunc(arr);
        if (num % 2 == 0) {
          let mr_mrs = 1;
        } else mr_mrs = 2;

        return mr_mrs;
      },

      getRandomDayDOB: function () {
        let minDayDOBOption = 2,
          maxDayDOBOption = 32;
        randomizer.getRandomNum(minDayDOBOption, maxDayDOBOption);
        randomDayDOB = random;
        return (dayDOB = String(randomDayDOB));
      },

      getRandomMonthDOB: function () {
        let minMonthDOBOption = 2,
          maxMonthDOBOption = 13;
        randomizer.getRandomNum(minMonthDOBOption, maxMonthDOBOption);
        randomMonthDOB = random;
        return (monthDOB = String(randomMonthDOB));
      },

      getRandomYearDOB: function () {
        let minYearDOBOption = 1900,
          maxYearDOBOption = 2022;
        randomizer.getRandomNum(minYearDOBOption, maxYearDOBOption);
        randomYearDOB = random;
        return (yearDOB = String(randomYearDOB));
      },
    };

    let randomizer = {
      getRandomNum(min, max) {
        random = Math.floor(Math.random() * (max - min + 1)) + min;
        return random;
      },
    };
    return user;
  },
};
