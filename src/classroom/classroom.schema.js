// import validator class
const joi = require('joi');

// add object schema
module.exports.addOneRecord = joi.object().keys({
  body: joi.string().required(),
  class_Room_Name: joi.string().required(),
  student_count:joi.number().required(),
  school_id:joi.string().required(),
});

// update object schema
module.exports.updateOneRecord = joi.object().keys({
  _id: joi.string().required(),
  body: joi.string(),
  class_Room_Name: joi.string(),
  student_count:joi.number(), 
  school_id:joi.string(), 
});
