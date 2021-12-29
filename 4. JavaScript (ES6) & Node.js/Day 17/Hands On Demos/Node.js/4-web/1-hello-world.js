const http = require("http");

const requestListener = (req, res) => {
  // console.log(req);
  // console.dir(req, { depth: 0 });
  // console.dir(req.url);
  console.dir(res);
  // res.end("Hello Node\n");
  // res.write("Hello Node\n");
  res.write("Hello World\n");
  res.end();
};

// const server = http.createServer((req, res) => {
//   res.end("Hello Node\n");
// });

// const server = http.createServer(requestListener()); // Not Ok

// const server = http.createServer(requestListener);

const server = http.createServer();
server.on("request", requestListener);

server.listen(4242, () => {
  console.log("Server is running...");
});
