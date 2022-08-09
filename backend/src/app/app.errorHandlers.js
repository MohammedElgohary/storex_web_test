module.exports = (app) => {
  /**
   * 404 handler
   */
  app.use((req, res, next) => next(sendError("Was Not Found !", 404)));

  /**
   * Error handler
   * Error reshape
   */
  app.use((err, req, res, next) => {
    let error = new Error(err?.message || "Server Error !");

    error.status = err?.status || 501;

    /**
     * validation error data will be passed from  sendError Global with you find
     * [@] ./src/app/app.globals.js
     */
    error.validation = err?.validation || null;

    const validationData = error?.validation
      ? { validation: error.validation }
      : null;

    /**
     * Logging the error
     */
    console.error(error);

    /**
     *  Success
     */
    let success = error.status.toString().startsWith("2");

    /**
     * Auth Needed
     */
    let needAuth = error.status.toString() === "401";

    /**
     * Sending the response
     */
    res.status(error.status).json({
      message: error.message,
      status: error.status,
      ...validationData,
      success,
      needAuth,
    });
  });
};
