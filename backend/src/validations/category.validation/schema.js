const Ajv = require("ajv");
const ajv = new Ajv();

/**
 * Validation Schema for category
 */
const schema = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 3, maxLength: 255 },
  },
};

/**
 * Required fields for adding category
 */
const required = ["title"];

/**
 * Ajv validators
 */
const validators = {
  add: ajv.compile({ ...schema, required }),
  update: ajv.compile({ ...schema }),
};

module.exports = validators;
