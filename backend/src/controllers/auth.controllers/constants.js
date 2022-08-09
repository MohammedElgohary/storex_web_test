const shape = (record) => {
  delete record.password;
  delete record.deleted;
  delete record.updated;
};

module.exports = {
  tableName: "users",
  primaryKey: "id",
  message: "user",
  message_plural: "users",
  response: (data) =>
    Array.isArray(data) ? data.forEach((ele) => shape(ele)) : shape(data),
};
