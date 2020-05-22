

const health = (req, res) => {
  res.status(200).send({
    status: 200,
    uptime: process.uptime(),
  });
};



module.exports = { health };
