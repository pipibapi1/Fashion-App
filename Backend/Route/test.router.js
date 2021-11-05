const express = require('express');
const testRoutes = express.Router();


let test = require('../Models/test.model');

testRoutes.get("/", async (req,res) => {
    test.find(function (err, tests) {
        if (err) {
          console.log(err);
        } else {
          res.json(tests);
        }
      })
    });

module.exports = testRoutes;

