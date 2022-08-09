const app = require("./src/app");
const http = require("http");
const server = http.createServer(app);

const debug = require("debug")("app:server");

const normalizePort = require("./src/utils/normalizePort");

/*** When using socket.io ***/
// const { Server } = require("socket.io");
// const io = new Server(server);

/**
 * Getting the port from an environment variable
 */
const port = normalizePort(process.env.PORT || "3000");

/**
 * App Listening
 */
server.listen(port, () => console.log(`App is listening on port ${port}`));

/**
 * listening event
 */
server.on("listening", () => {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
});

/**
 * Here we can use socket.io config
 */

// io.on("connection", (socket) => {
//   /*** When a user connects ***/
//   console.log("a user connected to our socket");

//   /*** socket channels ***/
//   socket.on("channel", require("./src/socket/channel.channel")(socket));

//   /*** when user leave the socket server ***/
//   socket.on("disconnect", () =>
//     console.log("a user disconnected from our socket")
//   );
// });
