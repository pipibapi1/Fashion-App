const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let loging = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    username: {
        type: String
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
        type:String
    },
    avatar: {
        type:String
    }
}
);

module.exports = mongoose.model('loging', loging, "login");
