const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let test = new Schema({
    userID: {
        type: Number
    },
    id: {
        type: String
    },
    title: {
        type: String
    },
    body: {
        type: String
    }
}
);

module.exports = mongoose.model('test', test, "test");