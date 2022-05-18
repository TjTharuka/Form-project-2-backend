// import validator class
const joi = require("joi");

// add object schema
module.exports.addOneRecord = joi.object().keys({
  grade: joi.number().required(),
  quactions: joi.array().required(),
  adminId: joi.string().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  grade: joi.number(),
  quactions: joi.array(),
  adminId: joi.string(),
});
