// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'card';

// create schema
const schema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    trim: true,
    required: true,
  },
  created_at: {
    type: Date,
    default: new Date(),
  },
  updated_at: {
    type: Date,
    default: new Date(),
  },
});

// create modal
const model = mongoose.model(model_name, schema);
module.exports = model;
