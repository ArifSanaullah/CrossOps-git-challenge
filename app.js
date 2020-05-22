const express = require("express");
const api = require("./api");

const app = express();

app.use(express.json());

app.get("/health", api.health);

module.exports = ({ port, cb }) => {
  app.listen(port, cb);
};
