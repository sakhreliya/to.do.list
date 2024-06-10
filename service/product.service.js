const { productSchema } = require("../model");

let addProduct = (body) => {
    return productSchema.create(body);

}

let getProduct = () => {
    return productSchema.find();
}

let deleteProduct = (id) => {
    return productSchema.findByIdAndDelete(id)
}

let findByName = (name) => {
    return productSchema.findOne({ name });
};


module.exports = { addProduct, getProduct, deleteProduct, findByName };