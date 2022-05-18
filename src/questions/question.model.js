// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'question';

// create schema
const schema = new mongoose.Schema({
        question: {
        type:String,
        required:true
      },
      questionType: {
        type:String,
        enum: ['text', 'image'],
        required:true
      },
      answer: {
        type:String,
        default:"",
      },
      answerType: {
        type:String,
        default:"",
      },
      adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
      },
      is_deleted: {
        type: Boolean,
        default: false,
      }
},
{ timestamps: true }
);

// create modal
const model = mongoose.model(model_name, schema);
module.exports = model;
