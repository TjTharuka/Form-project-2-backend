// import validator Schemas
const express = require('express');
const schema = require('./question.schema');
// import controllers
const controller = require('./question.controller');
// import Validator class
const validator = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const permission = require('./question.permission').permission_list;


// get all questions  
router.route(permission.question_get_all.path).get(controller.getAll);

// get single question  
router.route(permission.question_get_by_id.path).get(controller.getOne);


// add question
router
  .route(permission.question_save.path)
  .post(
    validator.validateBodyWithToken(
      schema.addOneRecord,
      permission.question_save.granted
    ),
    controller.postData
  );

// update question
router
  .route(permission.question_update.path)
  .put(
    validator.validateBodyWithToken(
      schema.updateOneRecord,
      permission.question_save.granted
    ),
    controller.putData
  );

// delete question 
router
  .route(permission.question_remove.path)
  .delete(
    validator.validateHeader(permission.question_save.granted),
    controller.deleteData
  );

module.exports = router;
