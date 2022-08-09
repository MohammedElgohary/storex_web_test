const router = require("express").Router();

/**
 * Controller
 */
const Controller = require("../controllers/users.controllers");

/**
 * Validation middlewares
 */
const {
  middlewares: { add: addValidation, update: updateValidation },
} = require("../validations/user.validation");

/**
 * Auth middlewares
 */
const checkAuth = require("../middlewares/checkAuth");

//------ Routes ------//
router.get("/", checkAuth, Controller.getAll);
router.get("/:id", checkAuth, Controller.getOne);

router.post("/", checkAuth, addValidation, Controller.create);
router.put("/:id", checkAuth, updateValidation, Controller.update);

router.delete("/:id", checkAuth, Controller.delete);
router.delete("/restore/:id", checkAuth, Controller.restore);

module.exports = router;
