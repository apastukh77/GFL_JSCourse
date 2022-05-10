const { I } = inject();

module.exports = {
  collectEmailPassword(uniqueEmail, uniquePasswd) {
    let collectedEmailPassword = uniqueEmail + " : " + uniquePasswd ;
    return collectedEmailPassword.toString();
  },
};
