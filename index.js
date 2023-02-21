/* const http = require("http");
const fs = require("fs")
const url = require("url");
const path = require("path");

function returnFile(pathname, res, onError) {
  fs.readFile(pathname, function (err, data) {
    if (err) {
      onError(err);
    } else {
      res.end(data.toString());
    }
  });
}

http
  .createServer(function (req, res) {
    const { pathname } = url.parse(req.url);
    const file = pathname === "/" ? "index.html" : pathname;
    const extension = file.split(".").pop();

    res.writeHead(200, { "Context-Type": `text/${extension}` });

    const fileToRead = path.join(__dirname, "static", file);
    returnFile(fileToRead, res, function (err) {
      returnFile(
        path.join(__dirname, "static/index.html"),
        res,
        function (err) {
          res.end("There was an error");
        }
      );
    });
  })
  .listen(8080);

console.log("listening on port 8080"); */
