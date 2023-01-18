const express = require("express");
const routers = express.Router();
const productControllers = require("../controllers/productControllers");

routers.route("/").get(productControllers.getAllProducts);

routers.route("/:id").get(productControllers.getProductById);

routers.route("/:id").patch(productControllers.updateProductById);

routers.route("/:id").delete(productControllers.deleteProductById);

routers.route("/").post(productControllers.createProduct);

module.exports = routers;
