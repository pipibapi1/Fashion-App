const express = require('express');
const OrderRoutes = express.Router(); 


let Order = require('../Models/Order.model');
let Customer = require('../Models/Customer.model');
let Product = require('../Models/Product.model');
let ProductItem = require('../Models/ProductItem.model');

OrderRoutes.post("/", async (req, res) => {
  try{
    const { id, date, address, status, note, listItemID, listQuantity, customerAccountId, totalPrice} = req.body;
    const newProduct = new Order({
      id,
      date,
      address,
      status,
      note,
      listItemID,
      listQuantity,
      customerAccountId,
      totalPrice
    });
    await newProduct.save(); 
    res.send({ success: true, message: req.body });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

OrderRoutes.post("/get-all/quan", async (req, res) => {
    Order.find(function (err, orders) {
        if (err) {
          console.log(err);
        }else {
          res.json(orders);
        }
      })

});

OrderRoutes.post("/get-info/quan", async(req, res) => {
    const {customerId, listItemID} = req.body;
    const customer = await Customer.findOne({id: customerId});
    var listItem = [];
    var listItemName = [];
    var listItemPrice = [];

    for(let i = 0; i < listItemID.length; i++){
        const item = await ProductItem.findOne({id : listItemID[i]});
        listItem.push(item);
    }
    for(let i = 0; i <listItem.length; i++){
      const product =  await Product.findOne({id : listItem[i].productID});
      listItemName.push(product.name);
      listItemPrice.push(product.price);
    }

    res.status(200).json({
      listItem,
      listItemName,
      listItemPrice,
      customer:{
        name : customer.name,
        avatar : customer.avatar,
        address : customer.address,
        phoneNumber : customer.phoneNumber
      }
      
    })
})

OrderRoutes.post("/huyChoXacNhan/quan", async(req, res) => {
  const {orderID} = req.body;
  const query = {id:orderID};
  const newOrder = await Order.findOneAndUpdate(query, {status : "Bị Hủy"} , { new: true} );

  res.status(200);
})

OrderRoutes.post("/huyDangGiao/quan", async(req, res) => {
  const {orderID, listItem, listQuantity} = req.body;
  const query = {id:orderID};
  const newOrder = await Order.findOneAndUpdate(query, {status : "Bị Hủy"} , { new: true} );

  for(let i =0; i < listItem.length; i++)
  {
    const newQuantity = listItem[i].remaining + listQuantity[i];
    const newSold = listItem[i].sold - listQuantity[i];
    const q = {id:listItem[i].id}
    const newItem = await ProductItem.findOneAndUpdate(q, {sold: newSold,remaining : newQuantity} , { new: true} );
  }
  res.status(200);
})

OrderRoutes.post("/xacNhan/quan", async(req, res) => {
  const {orderID, listItem, listQuantity} = req.body;
  const query = {id:orderID};
  const newOrder = await Order.findOneAndUpdate(query, {status : "Đang Giao"} , { new: true} );

  for(let i =0; i < listItem.length; i++)
  {
    const newQuantity = listItem[i].remaining - listQuantity[i];
    const newSold = listItem[i].sold + listQuantity[i];
    const q = {id:listItem[i].id}
    const newItem = await ProductItem.findOneAndUpdate(q, {sold: newSold,remaining : newQuantity} , { new: true} );
  }
  res.status(200);
})

OrderRoutes.post("/giaoXong/quan", async(req, res) => {
  const {orderID} = req.body;
  const query = {id:orderID};
  const newOrder = await Order.findOneAndUpdate(query, {status : "Đã Giao"} , { new: true} );

  res.status(200);
})

module.exports = OrderRoutes;

