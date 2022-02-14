const path = require("path");
const fs = require("fs");
const querystring = require("querystring");
const serverErrorHandler = require("./serverErrorHandler");

const postHandler = (req, res) => {
  let allData = "";

  req.on("data", (chunkOfData) => {
    allData += chunkOfData;
  });

  req.on("end", () => {
    res.writeHead(303, { Location: "/" });

    const file = path.join(__dirname, "..", "posts.json");

    fs.readFile(file, (err, data) => {
      if (err) serverErrorHandler(res);
      else {
        const obj = JSON.parse(data);
        obj[Date.now()] = querystring.parse(allData).post;
        fs.writeFile(file, JSON.stringify(obj), (err) => {
          serverErrorHandler(res);
        });
      }
    });

    res.end();
  });
};

module.exports = postHandler;
