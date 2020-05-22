const cb = () => {
  console.log("Server is up on port ", process.env.PORT || 3000);
};

require("./app")({ port: process.env.PORT || 3000, cb });
