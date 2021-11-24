const express = require('express');
const CustomerRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Customer = require('../Models/Customer.model');

// Customer user validation

CustomerRoutes.post("/", async (req, res) => {

    try {
        const { username, password } = req.body;
        const customer = await Customer.findOne({ username: username });

        if (username == "" || password == "")
            return res.json({ status:403,msg: "Username or Password fields are empty" });

        if (!customer)
            return res.json({ status:403,msg: "Invalid Username"});

        if (password !== customer.password)
            return res.json({ status:403,msg: "Password is Invalid!" });

        //jwt secret
        const token = jwt.sign({ id: customer._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            Customer: {
                id: customer.id,
                name: customer.name,
                username: customer.username,
                password: customer.password,
                address: customer.address
            },
        });


    } catch (err) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", err);
    }

});

CustomerRoutes.post("/create", async (req, res) => {

    try {
        const { name, password,email,phone,Euser,Address,Bday } = req.body;
        const customer = await Customer.findOne({ username: Euser });

        if (name == "" || password == "" || email == "" || phone=="" || Euser == ""|| Address=="")
            return res.json({ status:403,msg: "You must fill all the boxes" });

        if (customer)
            return res.json({ status:403,msg: "Username has been used"});

        var id = "KH000"+Math.floor((Math.random() * 1000) + 1)
        var check = await Customer.findOne({ id: id });
        while(check)
            id = "KH000"+Math.floor((Math.random() * 1000) + 1)
            var check = await Customer.findOne({ id: id });
        var dateOfBirth = Bday;
        var avatar = "https://i.imgur.com/9QvyleK.jpg";
        var listOrderID = []
        var username = Euser
        var dateCreate = new Date();
        var address = Address
        var phoneNumber = phone
        const newCus = new Customer({
                id,
                name,
                username,
                password,
                dateOfBirth,
                email,
                address,
                phoneNumber,
                avatar,
                dateCreate,
                listOrderID
              });
        //jwt secret
        await newCus.save(); 
        const token = jwt.sign({ id: newCus._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            Customer: {
                id: newCus.id,
                name: name,
                username: Euser,
                password: password,
            },
        });


    } catch (err) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", err);
    }

});

module.exports = CustomerRoutes;

