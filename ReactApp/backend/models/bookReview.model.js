const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookReviewSchema = new Schema({
    title: { type: String, required: true },
    category : {type : String , required : true},
    author: { type: String, required: true },
    rating: {
        type: Number,
        required: true,
        maxlength: 2,
    },
    review: { type: String, required: true },
    date: {
        type: Date,
        required: true,
        maxlength : 8,
    },
}, {
    timestamps: true,
});

const Review = mongoose.model('Review', bookReviewSchema);

module.exports = Review;