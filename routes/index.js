let express =require("express");
let routes =express.Router();
let productRoute = require("./product.route");


routes.use("/product", productRoute);

module.exports = routes;