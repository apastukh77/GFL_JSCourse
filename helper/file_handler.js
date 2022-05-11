const { I } = inject();
const fs = require("fs");
const helper = require("./helper");
const FILE_PATH = "./email_password/email_password.txt";
const FILE_PATH2 = "./email_password/email_password2.txt";

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

  recordEmailPasswordToFile() {
    this.recordContentToFile(FILE_PATH);
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
            email: row.split(/\s/)[0], password: row.split(/\s/)[1]
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
    let string = this.getContentFromFile(FILE_PATH2);
    return this.getArrayOfObjects(string);
  },


};
