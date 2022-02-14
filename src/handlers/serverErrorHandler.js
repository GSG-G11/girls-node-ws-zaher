const serverErrorHandler = (res) => {
  res.writeHead(500);
  res.end("server error");
};

module.exports = serverErrorHandler;
