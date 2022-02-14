const path = require("path");
const fs = require("fs");
const serverErrorHandler = require("./serverErrorHandler");

const contentType = {
  html: "text/html",
  css: "text/css",
  js: "text/javascript",
  jpg: "image/jpg",
  png: "image/png",
  json: "application/json",
};

const getExtension = (paths) => paths[paths.length - 1].split(".")[1];

const readFile = (res, paths) => {
  const file = path.join(__dirname, ...paths);

  fs.readFile(file, (err, data) => {
    if (err) serverErrorHandler(res);
    else {
      res.writeHead(200, {
        "Content-type": contentType[getExtension(paths)],
      });
      res.end(data);
    }
  });
};

module.exports = readFile;
