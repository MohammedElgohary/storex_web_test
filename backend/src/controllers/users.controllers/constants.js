const formatDate = require("../../utils/dateFormat");

const shape = (record) => {
  delete record.password;
  delete record.deleted;
  delete record.updated;

  record.birthdate = formatDate(record.birthdate);
};

module.exports = {
  tableName: "users",
  primaryKey: "id",
  message: "user",
  message_plural: "users",
  response: (data) =>
    Array.isArray(data) ? data.forEach((ele) => shape(ele)) : shape(data),
};
