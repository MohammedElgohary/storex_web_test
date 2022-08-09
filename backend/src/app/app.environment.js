module.exports = (app) => {
  /**
   * PORT
   */
  app.set("PORT", process.env.PORT || 5000);

  /**
   * ENV development || production
   */
  app.set("ENV", process.env.ENV || "development");

  /**
   * NODE JS ENV development || production
   */
  app.set("NODE_ENV", process.env.NODE_ENV || "development");
};
