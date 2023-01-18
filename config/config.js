const mongoose = require("mongoose");
require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT || 5000,
  },
};
module.exports = config;
