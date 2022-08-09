const tryCatch = require("../../utils/tryCatch");

module.exports = {
  getAll: tryCatch(require("./controllers/getAll")),
  getOne: tryCatch(require("./controllers/getOne")),
  create: tryCatch(require("./controllers/create")),
  update: tryCatch(require("./controllers/update")),
  delete: tryCatch(require("./controllers/delete")),
  restore: tryCatch(require("./controllers/restore")),
};
