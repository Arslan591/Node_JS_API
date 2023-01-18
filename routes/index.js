const express = require("express");
const router = express.Router();
const routers = require("./productRoutes");

const routes = router.use(routers);

module.exports = routes;
