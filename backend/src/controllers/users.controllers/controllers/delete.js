const { tableName, message, primaryKey } = require("../constants");

module.exports = async (req, res, next) => {
  const { id } = req.params;

  const query = `
    UPDATE ${tableName}
    SET deleted = 1
    WHERE ${primaryKey} = ${id}
  `;

  const [result] = await db.promise().query(query);

  if (!result.changedRows)
    return next(sendError(`${message} was not deleted !`, 400));

  res.status(200).json({
    message: `${message} deleted successfully !`,
  });
};
