const Ajv = require("ajv");
const ajv = new Ajv();

/**
 * Validation Schema for user
 */
const schema = {
  type: "object",
  properties: {
    name: { type: "string", minLength: 3, maxLength: 255 },
    email: { type: "string", minLength: 4, maxLength: 255 },
    password: { type: "string", minLength: 8, maxLength: 255 },
    birthdate: { type: "string", minLength: 5, maxLength: 255 },
  },
};

/**
 * Required fields for adding user
 */
const required = ["name", "email", "password"];

/**
 * Required fields for login
 */
const requiredLogin = ["email", "password"];

/**
 * Ajv validators
 */
const validators = {
  add: ajv.compile({ ...schema, required }),
  update: ajv.compile({ ...schema }),

  login: ajv.compile({ ...schema, required: requiredLogin }),
};

module.exports = validators;
