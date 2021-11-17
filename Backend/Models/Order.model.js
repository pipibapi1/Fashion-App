const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Order = new Schema({
    id: {
        type: String,
        unique: true
    },
    date:{
        type: Date
    },
    address:{
        type: String
    },
    status: {
        type: String
    },
    note: {
        type: String
    },
    listItemID: {
        type: Array
    },
    listQuantity: {
        type: Array
    },
    customerAccountId : {
        type: String
    },
    totalPrice : {
        type: Number
    }
}
);

module.exports = mongoose.model('Order', Order, "Order");
