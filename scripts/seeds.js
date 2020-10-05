const mongoose = require("mongoose");
const db = require("../models");
const MongoClient = require('mongodb').MongoClient;


mongoose.connect(
  process.env.MONGOATLAS_URI ||
  mongo "mongodb+srv://clusterkjy.lcvdc.mongodb.net/<books>" --username kjy_24
);

export const booSchema = {
  name: 'boo',
  properties: {
    _id: 'objectId?',
    author: 'string?',
    title: 'string?',
  },
  primaryKey: '_id',
};

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(booSchema))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });