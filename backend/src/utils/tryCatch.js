/**
 * This Function is used to try to execute a function and catch any error that may occur.
 * It allows us to control what will happen in the catch block in all places where we use this function.
 */
module.exports = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
