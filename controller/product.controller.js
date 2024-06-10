const { productService } = require("../service");

let addProduct = async (req, res) => {
  try {
    let body = req.body;

    let duplicate = await productService.findByName(body.name);

    if (duplicate) {
      throw new Error("product already exist");
    }

    let result = await productService.addProduct(body);

    if (!result) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "product added successfully",
      result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};


let getProduct = async (req, res) => {
  let result = await userservices.getProduct();
  res.status(200).json({
    message: "user get succesfully",
    result,
  })
}


let deleteProduct = async (req, res) => {
  console.log(req.params);
  let { id } = req.params

  let result = await userservices.deleteProduct(id)
  res.status(201).json({
    message: "user delete succesfully",
    result,
  })
}

let updateProduct = async (req, res) => {
  let { id } = req.params;
  console.log("🚀 ~ updateProduct ~ id:", id)
  let body = req.body;
  console.log("🚀 ~ updateProduct ~ body:", body)

  let result = await userservices.updateProduct(id, body);
  res.status(201).json({
    message: "user update successfully",
    result,
    updatedata: body
  })

}

module.exports = { addProduct, getProduct, deleteProduct, updateProduct };

