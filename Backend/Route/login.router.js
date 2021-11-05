const express = require('express');
const loginRoutes = express.Router();
const bcrypt = require('bcrypt');
const session = require('express-session');

const config = require('../configure.js');

const jwt = require('jsonwebtoken');




let login = require('../Models/login.model');

// clerk user validation

loginRoutes.post("/", async (req, res) => {

    try {

        const { username, password } = req.body;

        const clerk = await login.findOne({ username: username });

        if (username == "" || password == "")
            return res.json({ status:403,msg: "Username or Password fields are empty" });

        if (!clerk)
            return res.json({ status:403,msg: "Invalid Username" });

        if (username == "" || password == "")
            return res.json({ status:403,msg: "Username or Password fields are empty" });

        if (clerk['role'] !== "Nhân Viên")
            return res.json({ status:403,msg: "Store clerk Account is Required to Login !" });


       // const validate = await bcrypt.compare(password, clerk.password);

        if (password !== clerk.password)
            return res.json({ status:403,msg: "Password is Invalid!" });


        //jwt secret
        const token = jwt.sign({ id: clerk._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            clerk: {
                id: clerk.id,
                name: clerk.name,
                username: clerk.username,
                password: clerk.password,
                role: clerk.role,
                dateOfBirth: clerk.dateOfBirth,
                email: clerk.email,
                address: clerk.address,
                phoneNumber: clerk.phoneNumber,
                cccd: clerk.cccd,
                avatar: clerk.avatar
            },
        });


    } catch (err) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", err);
    }

});

//token validate
loginRoutes.post("/clerk-token-validate", async (req, res) => {

    try {

        const token = req.body.clerk_token;
        if (!token) return res.json(false);

        const validate = jwt.verify(token, config.JWT_SECRET);
        if (!validate) return res.json(false);

        const clerk = await login.findById(validate.id);
        if (!clerk) return res.json(false);

        return res.json(true);


    } catch (error) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", error);

    }

});



module.exports = loginRoutes;

