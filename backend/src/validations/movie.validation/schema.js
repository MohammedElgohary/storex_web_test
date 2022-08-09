const Ajv = require("ajv");
const ajv = new Ajv();

/**
 * Validation Schema for movie
 */
const schema = {
  type: "object",
  properties: {
    title: { type: "string", minLength: 3, maxLength: 255 },
    description: { type: "string", minLength: 3, maxLength: 255 },
    category: { type: "string", minLength: 1, maxLength: 11 },
    rate: { type: "string", minLength: 1, maxLength: 2 },
  },
};

/**
 * Required fields for adding movie
 */
const required = ["title", "category"];

/**
 * Ajv validators
 */
const validators = {
  add: ajv.compile({ ...schema, required }),
  update: ajv.compile({ ...schema }),
};

module.exports = validators;
