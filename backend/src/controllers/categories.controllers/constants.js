const shape = (record) => {
  delete record.deleted;
};

module.exports = {
  tableName: "categories",
  primaryKey: "id",
  message: "category",
  message_plural: "categories",
  response: (data) =>
    Array.isArray(data) ? data.forEach((ele) => shape(ele)) : shape(data),
};
