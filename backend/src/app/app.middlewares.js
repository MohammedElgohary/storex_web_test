const helmet = require("helmet");
const path = require("path");

const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

module.exports = (app) => {
  /**
   *  static files => || /uploads/ || folder
   */
  app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

  /**
   * security
   */
  app.use(cors());
  app.use(helmet());

  /**
   * compress all responses
   * does not have "x-no-compression" header
   */
  app.use(
    compression({
      filter: (req, res) =>
        req.headers["x-no-compression"] ? false : compression.filter(req, res),
      level: 6,
      threshold: 10 * 1024,
    })
  );

  /**
   * logger
   */
  app.use(morgan("dev"));

  /**
   * express
   */
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};
