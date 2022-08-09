const { primaryKey, tableName, message, response } = require("../constants");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const query = `
    SELECT
      t.*,
      c.title as category_title
    FROM ${tableName} t
    LEFT JOIN categories c ON t.category = c.id
    WHERE t.${primaryKey} = ${id}
      AND t.deleted = 0
      AND c.deleted = 0
  `;

  let [[data]] = await db.promise().query(query);

  if (!data) return next(sendError(`${message} was not found !`, 404));

  response(data);

  res.status(200).json(data);
};
