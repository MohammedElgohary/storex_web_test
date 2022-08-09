const { tableName, message, primaryKey } = require("../constants");

module.exports = async (req, res, next) => {
  const { email, password, name, birthdate } = req.body,
    emailQuery = email ? `email = "${email}",` : "",
    passwordQuery = password ? `password = MD5("${password}"),` : "",
    nameQuery = name ? `name = "${name}",` : "",
    birthdateQuery = birthdate ? `birthdate = "${birthdate}",` : "",
    { id } = req.params;

  const query = `
    UPDATE ${tableName}
    SET ${emailQuery} ${passwordQuery} ${nameQuery} ${birthdateQuery} updated=1
    WHERE ${primaryKey} = ${id}
  `;

  const [result] = await db.promise().query(query);

  if (!result.changedRows)
    return next(sendError(`${message} was not updated !`, 400));

  res.status(200).json({
    message: `${message} updated successfully !`,
  });
};
