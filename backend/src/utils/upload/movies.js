let multer = require("multer");
const path = require("path");
const mimeTypes = require("./types");

let storage = multer.diskStorage({
  destination: "./uploads/movies/",
  filename: (req, file, cb) =>
    cb(
      null,
      `MOVIE__@__${file.fieldname}__@__${Date.now()}${path.extname(
        file.originalname
      )}`
    ),
});

let upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (mimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 25,
  },
});

module.exports = {
  uploader: (fields) => upload.fields(fields),
  ImageUploader: upload.fields([{ name: "image", maxCount: 1 }]),
  upload,
};
