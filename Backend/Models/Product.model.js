const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for login
let Product = new Schema({
    id: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    brand: {
        type: String
    },
    madeIn: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    img:{
        type: String
    },
    feature:{
        type: String
    }
}
);

module.exports = mongoose.model('Product', Product, "Product");
