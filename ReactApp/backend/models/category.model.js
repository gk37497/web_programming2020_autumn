const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const bookCategory = new Schema({
    category: {
        type: String,
        required: true,
    }
},    {
    timestamps : true,
});

const BookCategory = mongoose.model('BookCategory', bookCategory);

module.exports = BookCategory;
