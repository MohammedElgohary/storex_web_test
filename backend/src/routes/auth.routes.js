const router = require("express").Router();

/**
 * Controller
 */
const Controller = require("../controllers/auth.controllers");

/**
 * Validation middlewares
 */
const {
  middlewares: { login: loginValidation },
} = require("../validations/user.validation");

//------ Routes ------//
router.post("/login", loginValidation, Controller.login);

module.exports = router;
