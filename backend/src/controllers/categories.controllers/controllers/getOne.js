const { primaryKey, tableName, message, response } = require("../constants");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const query = `
    SELECT
      *
    FROM ${tableName}
    WHERE ${primaryKey} = ${id}
      AND deleted = 0
  `;

  let [[data]] = await db.promise().query(query);

  if (!data) return next(sendError(`${message} was not found !`, 404));

  response(data);

  res.status(200).json(data);
};
