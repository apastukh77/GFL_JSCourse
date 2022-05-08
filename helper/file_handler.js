const { I } = inject();
const fs = require("fs");
const helper = require("./helper");
const FILE_PATH_INPUT = "./email_password/email_password_input.txt";
const FILE_PATH_OUTPUT = "./email_password/email_password_output.txt";

module.exports = {
  formRecordingData() {
    recordingData = helper.collectEmailPassword(uniqueEmail, uniquePasswd);
    console.log(recordingData);
    return recordingData;
  },

  recordContentToFile(path) {
    try {
      this.formRecordingData();
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
    let rowsArray = string.split(/\r\n/);
    let arrayOfObjects = [];
    for (const row of rowsArray) {
      arrayOfObjects.push({
        email: row.split(/\s/)[0],
        password: row.split(/\:\s/)[1],
      });
    }
    return arrayOfObjects;
  },

  getData() {
    let string = this.getContentFromFile(FILE_PATH_INPUT);
    return this.getArrayOfObjects(string);
  },

  recordEmailPasswordToFile() {
    this.recordContentToFile(FILE_PATH_OUTPUT);
  },
};
