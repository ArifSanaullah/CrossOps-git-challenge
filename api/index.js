const health = (req, res) => {
  res.status(200).send({
    status: "OK",
    uptime: process.uptime(),
  });
};

const user = (req, res) => {
  res.status(200).send({ route: "/user", method: "GET", status: "OK" });
};

module.exports = { health, user };
