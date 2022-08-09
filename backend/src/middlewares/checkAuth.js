const { verify } = require("../utils/JWT");

module.exports = async (req, res, next) => {
  /**
   * Check if the token is valid
   */
  let token = req?.headers?.authorization?.replace("Bearer ", "");

  if (!token) return next(sendError("sorry you need to login !", 401));

  /**
   * verify the token
   */
  let { uid } = verify(token);

  if (!uid) return next(sendError("sorry token is not valid !", 401));

  /**
   * Get the user using UID
   */
  let [[user]] = await db.promise().query(
    `
      SELECT
        *
      FROM users
      WHERE id=${uid} LIMIT 1
    `
  );

  if (!user) return next(sendError("sorry you need to login !", 401));

  /**
   * If user is deleted
   */
  if (user.deleted === "1")
    return next(
      sendError("sorry you are not allowed to access this area !", 401)
    );

  /**
   * add user to request
   */
  req.user = user;
  next();
};
