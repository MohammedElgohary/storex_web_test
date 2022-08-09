const { tableName, message, primaryKey } = require("../constants");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const query = `
    UPDATE ${tableName}
    SET deleted = 0
    WHERE ${primaryKey} = ${id}
  `;

  const [result] = await db.promise().query(query);

  if (!result.changedRows)
    return next(sendError(`${message} was not restored !`, 400));

  res.status(200).json({
    message: `${message} restored successfully !`,
  });
};
