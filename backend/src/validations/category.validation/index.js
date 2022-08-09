const validators = require("./schema");
const { validate, innerValidate } = require("./utils");

module.exports = {
  /**
   * validation middlewares
   */
  middlewares: {
    add: validate(validators.add),
    update: validate(validators.update),
  },

  /**
   * validation inside any request function
   */
  innerValidation: {
    add: innerValidate(validators.add),
    update: innerValidate(validators.update),
  },
};
