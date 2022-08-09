module.exports = (app) => {
  /**
   * The main connection
   */
  global.db = require("../connections");

  /**
   * Global function to send and shape errors
   */
  global.sendError = (message = null, status = null, validation = null) => {
    let err = new Error(message ? message : "");

    if (status) {
      err.status = status;
    }

    err.validation = validation;

    return err;
  };
};
