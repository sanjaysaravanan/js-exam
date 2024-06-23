const http = require("http");

const server = http.createServer(function (req, res) {
  res.write(JSON.stringify({ msg: "SUccesst", time: global.time }));

  res.end();
});

server.listen(4000);
