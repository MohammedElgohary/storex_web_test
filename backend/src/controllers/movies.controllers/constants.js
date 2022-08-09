const shape = (record) => {
  delete record.deleted;
  delete record.updated;
};

module.exports = {
  tableName: "movies",
  primaryKey: "id",
  message: "movie",
  message_plural: "movies",
  response: (data) =>
    Array.isArray(data) ? data.forEach((ele) => shape(ele)) : shape(data),
};
