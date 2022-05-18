// import validator Schemas
const express = require('express');
const schema = require('./paper.schema');
// import controllers
const controller = require('./paper.controller');
// import Validator class
const validator = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const permission = require('./paper.permission').permission_list;


// get all papers  
router.route(permission.paper_get_all.path).get(controller.getAll);

// get single paper  
router.route(permission.paper_get_by_id.path).get(controller.getOne);


// add paper
router
  .route(permission.paper_save.path)
  .post(
    validator.validateBodyWithToken(
      schema.addOneRecord,
      permission.paper_save.granted
    ),

    controller.postData
  );

// update paper
router
  .route(permission.paper_update.path)
  .put(
    validator.validateBodyWithToken(
      schema.updateOneRecord,
      permission.paper_save.granted
    ),
    controller.putData
  );

// delete paper 
router
  .route(permission.paper_remove.path)
  .delete(
    validator.validateHeader(permission.paper_save.granted),
    controller.deleteData
  );

module.exports = router;
