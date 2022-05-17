// import validator class
const joi = require('joi');

// add object schema
module.exports.addOneRecord = joi.object().keys({
  phone: joi.string().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  phone: joi.string(),
});
