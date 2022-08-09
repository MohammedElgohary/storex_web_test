const { tableName, message } = require("../constants");

module.exports = async (req, res, next) => {
  const { title } = req.body;

  const query = `
    INSERT INTO ${tableName} (
      title
    ) VALUES (
      "${title}"
    )
  `;

  const [result] = await db.promise().query(query);

  if (!result.affectedRows)
    return next(sendError(`${message} was not created !`, 400));

  res.status(200).json({
    message: `${message} added successfully !`,
  });
};
