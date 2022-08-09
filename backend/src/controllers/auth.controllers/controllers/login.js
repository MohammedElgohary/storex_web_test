const { tableName, message, response } = require("../constants");

const { sign } = require("../../../utils/JWT");

module.exports = async (req, res, next) => {

  const { email, password } = req.body;

  const query = `
    SELECT
      *
    FROM ${tableName}
    WHERE email = "${email}"
      AND password = MD5("${password}")
      AND deleted = 0
  `;

  let [[data]] = await db.promise().query(query);

  if (!data) return next(sendError(`${message} was not found !`, 404));

  response(data);

  const token = sign({
    uid: data?.id,
  });

  res.status(200).json({ ...data, token });
};
