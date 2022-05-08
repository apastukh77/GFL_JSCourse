const { I } = inject();

module.exports = {
  firstName: "Jon-Paul",
  lastName: "O'Sullivan",
  state: "Alabama",
  city: "Birmingham",
  zipCode: "35242",
  address1: "2nd St. 34",
  address2: "2nd St. 35",
  company: "TrackEnsure Inc",
  additionalInfo: "testtest1",
  homePhone: "+1727282892",
  mobilePhone: "+1727287097",

  alias: function () {
    var aliasArr = ["2nd St.34", "Birmingham", "AL", "US", "35242"];
    var aliasStr = aliasArr.toString().replace(/[\s.,%]/g, " ");
    return aliasStr;
  },

  gender: function () {
    var arr = Math.random() * 100;
    var num = Math.trunc(arr);
    if (num % 2 == 0) {
      var mr_mrs = 1;
    } else mr_mrs = 2;

    return mr_mrs;
  },

  getRandomDayDOB: function () {
    var minDayDOBOption = 2,
      maxDayDOBOption = 32;
    randomizer.getRandomNum(minDayDOBOption, maxDayDOBOption);
    randomDayDOB = random;
    return (dayDOB = String(randomDayDOB));
  },

  getRandomMonthDOB: function () {
    var minMonthDOBOption = 2,
      maxMonthDOBOption = 13;
    randomizer.getRandomNum(minMonthDOBOption, maxMonthDOBOption);
    randomMonthDOB = random;
    return (monthDOB = String(randomMonthDOB));
  },

  getRandomYearDOB: function () {
    var minYearDOBOption = 1900,
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
