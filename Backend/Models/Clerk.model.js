const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Clerk = new Schema({
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
    role: {
        type:String
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
    }
    ,
    cccd: {
        type:String,
        unique: true
    },
    avatar: {
        type:String
    }
}
);

module.exports = mongoose.model('Clerk', Clerk, "Clerk");
