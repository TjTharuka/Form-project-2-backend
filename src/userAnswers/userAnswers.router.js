// import validator Schemas
const express = require('express');
const schema = require('./userAnswers.schema');
// import controllers
const controller = require('./userAnswers.controller');
// import Validator class
const validator = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const permission = require('./userAnswers.permission').permission_list;


// get all userAnswerss  
router.route(permission.userAnswers_get_all.path).get(controller.getAll);

// get single userAnswers  
router.route(permission.userAnswers_get_by_id.path).get(controller.getOne);


// add userAnswers
router
  .route(permission.userAnswers_save.path)
  .post(
    validator.validateBodyWithToken(
      schema.addOneRecord,
      permission.userAnswers_save.granted
    ),

    controller.postData
  );

// update userAnswers
router
  .route(permission.userAnswers_update.path)
  .put(
    validator.validateBodyWithToken(
      schema.updateOneRecord,
      permission.userAnswers_save.granted
    ),
    controller.putData
  );

// delete userAnswers 
router
  .route(permission.userAnswers_remove.path)
  .delete(
    validator.validateHeader(permission.userAnswers_save.granted),
    controller.deleteData
  );

module.exports = router;
