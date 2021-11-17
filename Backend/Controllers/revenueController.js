const express = require('express');
// const ClerkRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Clerk = require('../Models/Clerk.model');
let Customer = require('../Models/Customer.model');
let Order = require('../Models/Order.model');
let ProductItem = require('../Models/ProductItem.model');
let Product = require('../Models/Product.model');

class revenueController {
    // GET /renenue/order
    showOrder(req, res) {
        Order.find(function(err, orders){
            if(err){
                console.log(err);
            }
            else {
                // orders.map(order => (
                //     {...order, SPECIAL: 'OK'}
                // ))
                res.json(orders)  
            }
        });
    }
    // POST /revenue.searchAcc
    searchAccountId(req, res) {
        Customer.findOne({id: req.body.searchAcount},function(err, account){
            if(err){
                console.log(err);
            }
            else {
                // console.log(typeof account);
                res.json(account);
            }
        })
    }
    // POST /revenue/searchItem
    searchItemId(req, res) {
        ProductItem.findOne({id: req.body.searchItem},function(err, item){
            if(err){
                console.log(err);
            }
            else {
                // console.log(typeof account);
                res.json(item);
            }
        })
    }
    // POST /revenue/searchProduct
    searchProductId(req, res) {
        Product.findOne({id: req.body.searchProduct},function(err, item){
            if(err){
                console.log(err);
            }
            else {
                console.log(item);
                res.json(item);
            }
        })
    }
}

module.exports = new revenueController();