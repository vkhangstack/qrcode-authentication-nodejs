"use strict";

require("dotenv").config();
const http = require("http");
const app = require("./app.js");
const server = http.createServer(app);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
