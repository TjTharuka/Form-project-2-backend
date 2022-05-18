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
  quactions:[
    {
      question: {
        type:String,
        required:true
      },
      answer: {
        type:String,
      },
    }
  ],
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
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
