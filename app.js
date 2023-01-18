const express = require("express");
const config = require("./config/config");
const app = express();

const connectDB = require("./config/config");

const routes = require("./routes/index");

app.use(express.json());

app.use(routes);

app.listen(config.app.port);
