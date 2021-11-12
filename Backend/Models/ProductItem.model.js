const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let ProductItem = new Schema({
    id: {
        type: String,
        unique: true
    },
    productID: {
        type: String
    },
    size: {
        type: String
    },
    img: {
        type: String
    },
    sold: {
        type: Number
    },
    remaining: {
        type: Number
    }
}
);

module.exports = mongoose.model('ProductItem', ProductItem, "ProductItem");
