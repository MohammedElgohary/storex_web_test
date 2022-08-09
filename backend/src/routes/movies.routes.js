const router = require("express").Router();

/**
 * Controller
 */
const Controller = require("../controllers/movies.controllers");

/**
 * Multer middleware for uploading images
 */
const { ImageUploader } = require("../utils/upload/movies");

/**
 * Auth middlewares
 */
const checkAuth = require("../middlewares/checkAuth");

//------ Routes ------//
router.get("/", checkAuth, Controller.getAll);
router.get("/:id", checkAuth, Controller.getOne);

router.post("/", checkAuth, ImageUploader, Controller.create);
router.put("/:id", checkAuth, ImageUploader, Controller.update);

router.delete("/:id", checkAuth, Controller.delete);
router.delete("/restore/:id", checkAuth, Controller.restore);

module.exports = router;
