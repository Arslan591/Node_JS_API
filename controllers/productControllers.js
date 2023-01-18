const express = require("express");
const productServices = require("../services/productServices");

const getAllProducts = async (req, res) => {
  const AllProducts = await productServices.getAllProducts(req);
  res.send(AllProducts);
};

const getProductById = async (req, res) => {
  const specificProducts = await productServices.getProductById(req);
  res.send(specificProducts);
};

const updateProductById = async (req, res) => {
  const updateProduct = await productServices.updateProduct(req);
  res.send(updateProduct);
};

const deleteProductById = async (req, res) => {
  const deleteProduct = await productServices.deleteProductById(req);

  res.send(deleteProduct);
};

const createProduct = async (req, res) => {
  const productinsert = await productServices.createProduct(req);
  res.send(productinsert);
};

module.exports = {
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  createProduct,
};
