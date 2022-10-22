const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  transports: ["polling"],
  allowUpgrades: true,
  pingInterval: 3000,
  wsEngine: "ws",
  origin: ["*"],
  cors: true,
});
require("./socket")(io);
const port = process.env.PORT || 8000;

app.use(function (req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Access-Token, Content-Type, Lang, crossDomain"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, OPTIONS, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  req.headers.host = req.headers["x-forwarded-host"];
  res.setHeader("Cache-Control", "no-cache");

  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

io.on("connection", (socket) => {
  console.log("Client connected");
  socket.on("disconnect", function () {
    console.log("Client disconnected");
  });
});
server.listen(port, function () {
  console.log(`Listening on port ${port}...`);
});
