const { tableName, message } = require("../constants");

const {
  innerValidation: { add: createValidation },
} = require("../../../validations/movie.validation");

module.exports = async (req, res, next) => {
  await createValidation({ body: req.body, next });

  const { title, description, category, rate } = {
    description: "",
    rate: 0.0,
    ...req.body,
  };

  let image = "";

  if (req?.files?.image?.length) {
    image = `/uploads/movies/${req.files.image[0].filename}`;
  }

  const query = `
    INSERT INTO ${tableName} (
      title,
      description,
      category,
      rate,
      image
    ) VALUES (
      "${title}",
      "${description}",
      ${category},
      ${rate},
      "${image}"
    )
  `;

  const [result] = await db.promise().query(query);

  if (!result.affectedRows)
    return next(sendError(`${message} was not created !`, 400));

  res.status(200).json({
    message: `${message} added successfully !`,
  });
};
