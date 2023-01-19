const express = require("express");
const Data = require("../models/product");

const getAllProducts = async (req, res) => {
  const AllProducts = await Data.findAll();
  res.send(AllProducts);
};

const getProductById = async (req, res) => {
  const _id = req.params.id;
  const specificProduct = await Data.findByPk(_id);
  res.send(specificProduct);
};

// const updateProductById = async (req, res) => {
//   const _id = req.params.id;
//   const updateProduct = await Data.findByIdAndUpdate(_id, req.body);
//   // res.send(allProducts);
//   console.log(updateProduct, "Hello");
// };

// const deleteProductById = async (req, res) => {
//   const deleteProduct = await Data.findByIdAndDelete(req.params.id);
//   // res.send(allProducts);
//   console.log(deleteProduct, "Hello");
// };

const createProduct = async (req, res) => {
  try {
    const insertNewProduct = await Data(req.body);
    console.log(req.body);
    const productAdded = insertNewProduct.save();
    res.send(productAdded);
  } catch (e) {
    res.send(e);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  // updateProductById,
  // deleteProductById,
  createProduct,
};
