module.exports = (app) => {
  /**
   * Main Routes
   */
  app.use("/", require("../routes"));

  /**
   * We can use other routes here
   */
};
