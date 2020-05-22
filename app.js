const express = require("express");
const api = require("./api");

const app = express();

app.use(express.json());

app.get("/health", api.health);
app.get("/user", api.user);

module.exports = ({ port, cb }) => {
  app.listen(port, cb);
};
