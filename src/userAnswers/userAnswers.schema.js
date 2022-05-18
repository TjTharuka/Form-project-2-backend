// import validator class
const joi = require("joi");

// add object schema
module.exports.addOneRecord = joi.object().keys({
  userId: joi.string().required(),
  paperId: joi.string().required(),
  answers: joi.array().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  userId: joi.string(),
  paperId: joi.string(),
  answers: joi.array(),
});
