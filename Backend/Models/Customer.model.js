const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Customer = new Schema({
    id: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    dateOfBirth: {
        type:Date
    },
    email: {
        type:String
    }
    ,
    address: {
        type:String
    }
    ,
    phoneNumber: {
        type:String
    },
    avatar: {
        type:String
    },
    dateCreate: {
        type: Date
    },
    listOrderID : {
        type: Array
    }
}
);

module.exports = mongoose.model('Customer', Customer, "Customer");
