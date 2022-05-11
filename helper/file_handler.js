const { I } = inject();
const fs = require("fs");
const helper = require("./helper");
const FILE_PATH = "./email_password/email_password.txt";

module.exports = {
  recordContentToFile(path) {
    try {
      let recordingData = helper.collectEmailPassword(
        uniqueEmail,
        uniquePasswd
      );
      fs.writeFileSync(path, recordingData, "utf8");
    } catch (err) {
      console.error(err);
    }
  },

  getContentFromFile(path) {
    try {
      return fs.readFileSync(path, "utf8");
    } catch (err) {
      console.error(err);
    }
  },

  getArrayOfObjects(string) {
    let rowsArray = string.split(" : ");
    let arrayOfObjects = [];
    arrayOfObjects.push({
      email: rowsArray[0],
      password: rowsArray[1],
    });
    return arrayOfObjects;
  },

  getData() {
    let string = this.getContentFromFile(FILE_PATH);
    return this.getArrayOfObjects(string);
  },

  recordEmailPasswordToFile() {
    this.recordContentToFile(FILE_PATH);
  },
};
