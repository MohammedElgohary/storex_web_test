const tryCatch = require("../../utils/tryCatch");

module.exports = {
  login: tryCatch(require("./controllers/login")),
};
