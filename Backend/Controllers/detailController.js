const express = require('express');
// const ClerkRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Clerk = require('../Models/Clerk.model');
let Customer = require('../Models/Customer.model');

class detailController {
    // GET detail/Clerk
    showClerk(req, res) {
        Clerk.find(function(err, clerks){
            if(err){
                console.log(err);
            }
            else {
                res.json(clerks);
            }
        });
    }
    // GET detail/Customer
    showCustomer(req, res) {
        Customer.find(function(err, customers){
            if(err){
                console.log(err);
            }
            else {
                res.json(customers);
            }
        });
    }
}

module.exports = new detailController();