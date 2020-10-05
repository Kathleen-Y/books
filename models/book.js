const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = {
  title: 'book',
  properties: {
    author: { type: String, required: true },
  synopsis: 'string',
  date: Date.now, 
}
};

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;