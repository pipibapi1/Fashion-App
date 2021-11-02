const express = require('express');
const loginUpdateRoutes = express.Router();
const jwt = require('jsonwebtoken');

const config = require('../configure.js');


let login = require('../Models/login.model');

loginUpdateRoutes.post("/", async(req, res) => {
    try {
        const {email, address, phoneNumber, cccd, birthday, id, avatar} = req.body;
        
        const query = {id:id};
        if(req.files === null)
        {   
            
            const newClerk = await login.findOneAndUpdate(query, {email : email, address : address, phoneNumber : phoneNumber, cccd : cccd, dateOfBirth : birthday} , {
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
            
            
            const newClerk = await login.findOneAndUpdate(query, {email : email, address : address, phoneNumber : phoneNumber, cccd : cccd, dateOfBirth : birthday, avatar:avatar} , {
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

module.exports = loginUpdateRoutes;