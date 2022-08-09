/**
 * Message for table name validation
 */
const message = "Movie";

/**
 * takes a validator and returns a function that takes the req.body and the next function
 * to be called in case of error
 *
 * This is used inside the function in case of multer uploads
 * Which prevents the validation middleware from running
 */
const innerValidate =
  (validator) =>
  ({ body, next }) => {
    const valid = validator(body);

    if (!valid)
      return next(sendError(`${message} is not valid`, 403, validator.errors));
  };

const validate = (validator) => async (req, res, next) => {
  const { body } = req;
  await innerValidate(validator)({ body, next });

  next();
};

module.exports = {
  validate,
  innerValidate,
};
