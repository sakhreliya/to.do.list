let express = require("express");
let routes = express.Router();
const { productController } = require("../controller");
const { route } = require(".");


route.post("/addProduct", productController.addProduct);
route.get("getProduct", productController.getProduct);
route.delete("deleteProduct", productController.deleteProduct);
route.update("updateProduct", productController.updateProduct);


module.exports = route;