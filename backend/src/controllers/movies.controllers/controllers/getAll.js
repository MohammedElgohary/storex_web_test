const { primaryKey, tableName, response } = require("../constants");

module.exports = async (req, res, next) => {
  const { page, limit, deleted, sort, name, category, rate } = {
      page: 1,
      limit: 20,
      deleted: 0,
      ...req.query,
    },
    skip = (page - 1) * limit;

  const query = `
    SELECT
      t.*,
      c.title as category_title
    FROM ${tableName} t
    LEFT JOIN categories c ON t.category = c.id
    WHERE 1=1
      ${name ? `AND name LIKE '%${name}%'` : ""}
      ${category ? `AND category = '${category}'` : ""}
      ${rate ? `AND rate = '${rate}'` : ""}
      ${deleted ? `AND deleted = ${deleted}` : ""}
      AND t.deleted = 0
      AND c.deleted = 0
    ORDER BY t.${primaryKey} ${sort ? "ASC" : "DESC"}
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
