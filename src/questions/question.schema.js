// import validator class
const joi = require("joi");

// add object schema
module.exports.addOneRecord = joi.object().keys({
  PaperName: joi.string().required(),
  dificultyLevel: joi. string().required(),
  grade: joi.number().required(),
  adminId: joi.string().required(),
  quactions: joi.array().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  quactions: joi.array(),
  adminId: joi.string(),
});
