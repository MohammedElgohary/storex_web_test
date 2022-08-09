let jwt = require("jsonwebtoken");

/**
 * It will encode the object (obj) inside the token
 */
let sign = (obj) =>
  jwt.sign(obj, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });

/**
 * It will verify the token
 */
let verify = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = { sign, verify };
