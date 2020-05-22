const health = (req, res) => {
  res.status(200).send({
    status: 200,
    uptime: process.uptime(),
  });
};

const user = (req, res) => {
  res.status(200).send({ route: "/user", status: "OK" });
};

module.exports = { health, user };
