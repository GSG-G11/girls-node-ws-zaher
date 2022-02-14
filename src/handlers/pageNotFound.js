const pageNotFound = (res) => {
  res.writeHead(404);
  res.end("Page Not Found");
};

module.exports = pageNotFound;
