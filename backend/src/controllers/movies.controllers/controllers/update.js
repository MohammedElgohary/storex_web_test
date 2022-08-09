const { tableName, message, primaryKey } = require("../constants");

const {
  innerValidation: { update: updateValidation },
} = require("../../../validations/movie.validation");

module.exports = async (req, res, next) => {
  await updateValidation({ body: req.body, next });

  const { title, description, category, rate } = req.body,
    titleQuery = title ? `title = "${title}",` : "",
    descriptionQuery = description ? `description = "${description}",` : "",
    categoryQuery = category ? `category = ${category},` : "",
    rateQuery = rate ? `rate = ${rate},` : "",
    imageQuery = req?.files?.image?.length
      ? `image = "/uploads/movies/${req.files.image[0].filename}",`
      : "",
    { id } = req.params;

  const query = `
    UPDATE ${tableName}
    SET ${titleQuery} ${descriptionQuery} ${categoryQuery} ${rateQuery} ${imageQuery} updated=1
    WHERE ${primaryKey} = ${id}
  `;

  const [result] = await db.promise().query(query);

  if (!result.changedRows)
    return next(sendError(`${message} was not updated !`, 400));

  res.status(200).json({
    message: `${message} updated successfully !`,
  });
};
