const pageNotFound = require("./handlers/pageNotFound");
const postHandler = require("./handlers/postHandler");
const readFile = require("./handlers/readFile");

const router = (req, res) => {
  const endpoint = req.url;

  if (endpoint === "/") {
    readFile(res, ["..", "..", "public", "index.html"]);
  } else if (endpoint === "/public/main.css") {
    readFile(res, ["..", "..", "public", "main.css"]);
  } else if (endpoint === "/public/img/logo1.png") {
    readFile(res, ["..", "..", "public", "img", "logo1.png"]);
  } else if (endpoint === "/public/img/logo2.png") {
    readFile(res, ["..", "..", "public", "img", "logo2.png"]);
  } else if (endpoint === "/script.js") {
    readFile(res, ["..", "..", "public", "script.js"]);
  } else if (endpoint === "/create-post") {
    postHandler(req, res);
  } else if (endpoint === "/posts") {
    readFile(res, ["..", "posts.json"]);
  } else pageNotFound(res);
};

module.exports = router;
