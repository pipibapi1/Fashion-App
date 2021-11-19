const express = require("express");
const ProductItem = require("../Models/ProductItem.model");
const ProductItemRoute = express.Router();
const upload = require("../middleware/handleimg");

// POST http://localhost/3000/PR000001
// @desc insert size product into product
ProductItemRoute.post("/:idProduct", upload.single("img"), async (req, res) => {
  try {
    const { id, size, sold, remaining } = req.body;
    const newProductItem = new ProductItem({
      id,
      size,
      img: `http://localhost:3000/${req.file.path}`,
      sold,
      remaining,
      productID: req.params.idProduct,
    });
    await newProductItem.save();
    res.send({ success: true, productItem: newProductItem });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
// GET http://localhost/3000/PR000001
// @desc get all size product into product
ProductItemRoute.get("/", async (req, res) => {
  try {
    const productItems = await ProductItem.find({});
    res.send({ success: true, productItems: productItems });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// GET http://localhost/3000/PR000001
// @desc get all size product into product
ProductItemRoute.get("/:idProduct", async (req, res) => {
  try {
    const productItems = await ProductItem.find({
      productID: req.params.idProduct,
    });
    res.send({ success: true, productItems: productItems });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

ProductItemRoute.post("/", async (req, res) => {
  try {
    const { idX, sizeX } = req.body;
    const productItems = await ProductItem.find({
      productID: idX,
      size: sizeX
    });
    res.send({ success: true, ID: "PI000015"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// PUT http://localhost/3000/PR000001/PI1515151
// @desc update size product
ProductItemRoute.put(
  "/:idProduct/:id",
  upload.single("img"),
  async (req, res) => {
    const { size, sold, remaining } = req.body;
    try {
      let ProductItemUpdated = {
        size,
        img: req.file ? `http://localhost:3000/${req.file.path}` : req.body.img,
        sold,
        remaining,
      };
      const conditionUpdated = {
        id: req.params.id,
        productID: req.params.idProduct,
      };
      ProductItemUpdated = await ProductItem.findOneAndUpdate(
        conditionUpdated,
        ProductItemUpdated,
        { new: true }
      );
      if (!ProductItemUpdated)
        res.status(401).json({ success: true, msg: "ProductItem not found" });
      res.send({ success: true, productItem: ProductItemUpdated });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);

// DELETE http://localhost/3000/PR000001/PI1515151
// @desc update size product
ProductItemRoute.delete("/:idProduct/:id", async (req, res) => {
  try {
    const conditionUpdated = {
      id: req.params.id,
      productID: req.params.idProduct,
    };
    const ProductItemDeleted = await ProductItem.deleteOne(conditionUpdated);
    if (!ProductItemDeleted)
      res.status(401).json({ success: true, msg: "ProductItem not found" });
    res.send({ success: true, productItem: ProductItemDeleted });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// DELETE http://localhost/3000/PR000001/PI1515151
// @desc update size product
ProductItemRoute.delete("/:idProduct", async (req, res) => {
  try {
    const conditionUpdated = {
      productID: req.params.idProduct,
    };
    const ProductItemDeleted = await ProductItem.deleteMany(conditionUpdated);
    if (!ProductItemDeleted)
      res.status(401).json({ success: true, msg: "ProductItem not found" });
    res.send({ success: true, productItem: ProductItemDeleted });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});
module.exports = ProductItemRoute;
