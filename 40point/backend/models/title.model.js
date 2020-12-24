const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const titleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('title', titleSchema);

module.exports = User;