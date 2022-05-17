// import validator Schemas
const express = require('express');
const schema = require('./classroom.schema');
// import controllers
const controller = require('./classroom.controller');
// import Validator class
const validator = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const permission = require('./classroom.permission').permission_list;


// get all classrooms  
router.route(permission.classroom_get_all.path).get(controller.getAll);

// get single classroom  
router.route(permission.classroom_get_by_id.path).get(controller.getOne);


// add classroom
router
  .route(permission.classroom_save.path)
  .post(
    validator.validateBodyWithToken(
      schema.addOneRecord,
      permission.classroom_save.granted
    ),

    controller.postData
  );

// update classroom
router
  .route(permission.classroom_update.path)
  .put(
    validator.validateBodyWithToken(
      schema.updateOneRecord,
      permission.classroom_save.granted
    ),
    controller.putData
  );

// delete classroom 
router
  .route(permission.classroom_remove.path)
  .delete(
    validator.validateHeader(permission.classroom_save.granted),
    controller.deleteData
  );

module.exports = router;
