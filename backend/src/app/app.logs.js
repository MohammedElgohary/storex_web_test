module.exports = (app) => {
  /**
   * Un Handled Catch
   */
  process.on("uncaughtException", (err) => {
    console.error(err);
    process.exit(1);
  });

  /**
   * Un Handled Promise
   */
  process.on("unhandledRejection", (err) => {
    console.error(err);
    process.exit(1);
  });

  /**
   * error event
   */
  app.on("error", (err) => {
    console.error(err);
  });

  /**
   * close event
   */
  app.on("close", () => {
    console.log("Server closed !");
  });
};
