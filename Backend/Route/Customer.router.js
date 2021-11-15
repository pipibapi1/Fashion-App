const express = require('express');
const CustomerRoutes = express.Router();
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Customer = require('../Models/Customer.model.js');

// Customer user validation

CustomerRoutes.post("/", async (req, res) => {

    try {

        const { username, password } = req.body;
        const customer = await Customer.findOne({ username: username });

        if (username == "" || password == "")
            return res.json({ status:403,msg: "Username or Password fields are empty" });

        if (!customer)
            return res.json({ status:403,msg: "Invalid Username" });

        if (username == "" || password == "")
            return res.json({ status:403,msg: "Username or Password fields are empty" });

       // const validate = await bcrypt.compare(password, Customer.password);

        if (password !== Customer.password)
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
            },
        });


    } catch (err) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", err);
    }

});


module.exports = CustomerRoutes;

