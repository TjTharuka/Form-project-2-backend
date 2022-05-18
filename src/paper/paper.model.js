// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'paper';

// create schema
const schema = new mongoose.Schema({
  grade: {
    type: Number,
    trim: true,
    required: true,
  },
  quactions: {
    type: Array,
    trim: true,
    required: true,
  },
  adminId: {
    type: String,
    default: false,
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
