const express = require("express");
const ProductModel = require("../Models/Product.model");
const ProductRoute = express.Router();
const upload = require("../middleware/handleimg");

// POST "http://3000/localhost/product"
// @desc create product
ProductRoute.post("", async (req, res) => {
  const { name, brand, madeIn, price, description, img, feature } = req.body;
  const newProduct = new ProductModel({
    id: "PR999999",
    name,
    brand,
    madeIn,
    price,
    description,
    img,
    feature,
  });
  try {
    await newProduct.save();
    res.send({ success: true, product: newProduct });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// GET "http://3000/localhost/prouct"
// @desc: get all product

ProductRoute.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.send({ success: true, products: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// GET "http://3000/localhost/prouct/:id"
// @desc: get one product

ProductRoute.get("/:id", async (req, res) => {
  try {
    const product = await ProductModel.findOne({ id: req.params.id });
    res.send({ success: true, product: product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// DELETE "http://3000/localhost/prouct/:id"
// @desc: delete product by id
ProductRoute.delete("/:id", async (req, res) => {
  try {
    const productDeleted = await ProductModel.deleteOne({ id: req.params.id });
    if (!productDeleted)
      res.status(401).json({ success: false, msg: "Product not found" });
    res.send({
      success: true,
      msg: `Product have id ${productDeleted.id} deleted`,
      product: productDeleted,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// PUT "http://3000/localhost/prouct/:id"
// @desc: update product by id

ProductRoute.put("/:id", async (req, res) => {
  const { name, brand, madeIn, price, description, img, feature } = req.body;
  try {
    let productUpdated = {
      name,
      brand,
      madeIn,
      price,
      description,
      img,
      feature,
    };
    console.log(productUpdated);
    const conditionUpdated = { id: req.params.id };
    productUpdated = await ProductModel.findOneAndUpdate(
      conditionUpdated,
      productUpdated,
      { new: true }
    );
    if (!productUpdated)
      res.status(401).json({ success: false, msg: "Product not found" });

    res.send({
      success: true,
      product: productUpdated,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = ProductRoute;
