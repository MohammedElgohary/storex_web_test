const { primaryKey, tableName, response } = require("../constants");

module.exports = async (req, res, next) => {
  const { page, limit, deleted, sort, email, name, birthdate } = {
      page: 1,
      limit: 20,
      deleted: 0,
      ...req.query,
    },
    skip = (page - 1) * limit;

  const query = `
    SELECT
      *
    FROM ${tableName}
    WHERE 1=1
      ${name ? `AND name LIKE '%${name}%'` : ""}
      ${email ? `AND email = '${email}'` : ""}
      ${birthdate ? `AND birthdate = '${birthdate}'` : ""}
      ${deleted ? `AND deleted = ${deleted}` : ""}
    ORDER BY ${primaryKey} ${sort ? "ASC" : "DESC"}
    LIMIT ${limit}
    OFFSET ${skip}
  `;

  let [data] = await db.promise().query(query);

  response(data);

  const countQuery = `
    SELECT
      COUNT(*) as totalCount
    FROM ${tableName}
  `;

  const [[{ totalCount }]] = await db.promise().query(countQuery);
  const pagesCount = Math.ceil(totalCount / limit);

  res.status(200).json({
    data,
    page: +page,
    limit: +limit,
    pagesCount,
    totalCount,
    sort: sort ? "ASC" : "DESC",
    sortBy: primaryKey,
  });
};
