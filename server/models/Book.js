const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
});

module.exports = mongoose.model('Book', BookSchema);
