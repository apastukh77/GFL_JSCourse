const { I } = inject();
const fs = require("fs");
// const helper = require("./helper");
const FILE_PATH_OUTPUT = "./email_password/email_password_output.txt";
const FILE_PATH_INPUT = "./email_password/email_password_input.txt";

module.exports = {
  recordContentToFile(path, data) {
    try {
      fs.writeFileSync(path, data, "utf8");
    } catch (err) {
      console.error(err);
    }
  },

  recordEmailPasswordToFile(email, password) {
    let recordingData = email + " : " + password;
    this.recordContentToFile(FILE_PATH_OUTPUT, recordingData);
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
        password: row.split(/\s/)[1],
      });
    }
    return arrayOfObjects;
  },

  // getArrayOfObjects(string) {
  //   let rowsArray = string.split(" : ");
  //   let arrayOfObjects = [];
  //   arrayOfObjects.push({
  //     email: rowsArray[0],
  //     password: rowsArray[1],
  //   });
  //   return arrayOfObjects;
  // },

  getData() {
    let string = this.getContentFromFile(FILE_PATH_INPUT);
    return this.getArrayOfObjects(string);
  },
};
