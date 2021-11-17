const express = require('express');
const ClerkRoutes = express.Router(); 
const config = require('../configure.js');
const jwt = require('jsonwebtoken');

let Clerk = require('../Models/Clerk.model');

// clerk user validation

ClerkRoutes.post("/quan", async (req, res) => {

    try {

        const { username, password } = req.body;

        const clerk = await Clerk.findOne({ username: username });

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


ClerkRoutes.post("/update-router/quan", async(req, res) => {
    try {
        const {email, address, phoneNumber, cccd, birthday, id, avatar} = req.body;
        
        const query = {id:id};
        if(req.files === null)
        {   
            
            const newClerk = await Clerk.findOneAndUpdate(query, {email : email, address : address, phoneNumber : phoneNumber, cccd : cccd, dateOfBirth : birthday} , {
                new: true
              } );
              const token = jwt.sign({ id: newClerk._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            newClerk: {
                id: newClerk.id,
                name: newClerk.name,
                username: newClerk.username,
                password: newClerk.password,
                role: newClerk.role,
                dateOfBirth: newClerk.dateOfBirth,
                email: newClerk.email,
                address: newClerk.address,
                phoneNumber: newClerk.phoneNumber,
                cccd: newClerk.cccd,
                avatar: newClerk.avatar
            },
        });
        }
        else
        {
            
            const newClerk = await Clerk.findOneAndUpdate(query, {email : email, address : address, phoneNumber : phoneNumber, cccd : cccd, dateOfBirth : birthday, avatar:avatar} , {
                new: true
              } );
              const token = jwt.sign({ id: newClerk._id }, config.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            token,
            newClerk: {
                id: newClerk.id,
                name: newClerk.name,
                username: newClerk.username,
                password: newClerk.password,
                role: newClerk.role,
                dateOfBirth: newClerk.dateOfBirth,
                email: newClerk.email,
                address: newClerk.address,
                phoneNumber: newClerk.phoneNumber,
                cccd: newClerk.cccd,
                avatar: newClerk.avatar
            },
        });

        }
        
        
        

    } catch (err) {
        res.status(400).json({ msg: "Validation Error" });
        console.log("Error is ", err);
    }
})



module.exports = ClerkRoutes;

