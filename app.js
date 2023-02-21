const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer(function (req, res) {
    const urlPath = req.url === "/" ? "index.html" : req.url;
    res.writeHead(200, { "Content-Type": `text.html` });
    fs.readFile((__dirname, `static/${urlPath}`), function (err, data) {
      if (err) {
        res.end("404: File not found");
        return res.end();
      } else {
        console.log(req.url);
        console.log(urlPath);
        res.end(data.toString());
      }
    });
  })
  .listen(8080);

console.log("listening from port 8080");
