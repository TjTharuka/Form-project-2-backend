// import validator Schemas
const express = require('express');
const schema = require('./school.schema');
// import controllers
const controller = require('./school.controller');
// import Validator class
const validator = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const permission = require('./school.permission').permission_list;


// get all schools  
router.route(permission.school_get_all.path).get(controller.getAll);

// get single school  
router.route(permission.school_get_by_id.path).get(controller.getOne);

// add school
router
  .route(permission.school_save.path)
  .post(
    validator.validateBodyWithToken(
      schema.addOneRecord,
      permission.school_save.granted
    ),

    controller.postData
  );

// update school
router
  .route(permission.school_update.path)
  .put(
    validator.validateBodyWithToken(
      schema.updateOneRecord,
      permission.school_save.granted
    ),
    controller.putData
  );

// delete school 
router
  .route(permission.school_remove.path)
  .delete(
    validator.validateHeader(permission.school_save.granted),
    controller.deleteData
  );

module.exports = router;
