const { tableName, message, primaryKey } = require("../constants");

module.exports = async (req, res, next) => {
  const { title } = req.body,
    { id } = req.params;

  const query = `
    UPDATE ${tableName}
    SET title = "${title}"
    WHERE ${primaryKey} = ${id}
  `;

  const [result] = await db.promise().query(query);

  if (!result.changedRows)
    return next(sendError(`${message} was not updated !`, 400));

  res.status(200).json({
    message: `${message} updated successfully !`,
  });
};
