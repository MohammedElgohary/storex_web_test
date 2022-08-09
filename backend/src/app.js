require("dotenv").config();

const express = require("express");
const app = express();

/**
 * Env variables
 */
require("./app/app.environment")(app);

/**
 * App Globals
 */
require("./app/app.globals")(app);

/**
 * Middlewares
 */
require("./app/app.middlewares")(app);

/**
 * Routes
 */
require("./app/app.routes")(app);

/**
 * Error
 */
require("./app/app.errorHandlers")(app);

/**
 * Logs
 */
require("./app/app.logs")(app);

module.exports = app;
