// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'notification';

// create schema
const schema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    is_deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

// create modal
const model = mongoose.model(model_name, schema);
module.exports = model;
