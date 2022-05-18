// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'paper';

// create schema
const schema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  class_Room_Name: {
    type: String,
    trim: true,
    required: true,
  },
  student_count: {
    type: Number,
    trim: true,
    required: true,
  },
  is_deleted: {
    type: Boolean,
    default: false,
  },
},
{ timestamps: true }
);

// create modal
const model = mongoose.model(model_name, schema);
module.exports = model;
