// import mongoose
const mongoose = require('mongoose');
// declare model name
const model_name = 'otp';
// import user status
const { otpStatus } = require('../../config/otpConfig');

// create schema
const schema = new mongoose.Schema(
  {
    otp_code: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: String,
      default: otpStatus.notConfirmed,
      trim: true,
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
