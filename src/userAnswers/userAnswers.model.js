// import mongoose
const { required } = require('joi/lib/types/lazy');
const mongoose = require('mongoose');
const { Stream } = require('nodemailer/lib/xoauth2');
// declare model name
const model_name = 'userAnswers';

// create schema
const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  paperId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'paper',
    required: true,
  },
  answers:[
    {
      question:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'question',
      required:true
    },
    answer:{
        type: String,
        required:true
    }

  }
  ],
  is_deleted: {
    type: Boolean,
    default: false,
  }}
,
{ timestamps: true }
);

// create modal
const model = mongoose.model(model_name, schema);
module.exports = model;
