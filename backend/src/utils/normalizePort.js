/**
 * Normalize a port into a number, string, or false.
 */
module.exports = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;

    // port number
  } else if (port >= 0) {
    // port number
    return port;

    // invalid
  }

  return false;
};
