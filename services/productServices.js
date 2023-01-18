const Data = require("../models/product");

const createProduct = async (req) => {
  try {
    const result = await Data(req.body);
    console.log(req.body);
    const productAdded = result.save();
    return productAdded;
  } catch (e) {
    console.log(e);
  }
};

const getAllProducts = async (req) => {
  try {
    const result = await Data.find();
    return result;
  } catch (e) {
    console.log(e);
  }
};

const getProductById = async (req) => {
  try {
    const result = await Data.findById({ _id: req.params.id });
    return result;
  } catch (e) {
    console.log(e);
  }
};
const updateProduct = async (req) => {
  try {
    const result = await Data.findByIdAndUpdate({ _id: req.params.id });
    return result;
  } catch (e) {
    console.log(e);
  }
};
const deleteProductById = async (req) => {
  try {
    const result = await Data.findByIdAndDelete({ _id: req.params.id });
    return result;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProductById,
};
