// import validator Schemas
const express = require('express');
const schema = require('./card.schema');
// import controllers
const controller = require('./card.controller');
// import Validator class
const validator = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const permission = require('./card.permission').permission_list;

router.route(permission.card_get_all.path).get(controller.getAll);
router.route(permission.card_get_by_id.path).get(controller.getOne);
router
  .route(permission.card_save.path)
  .post(
    validator.validateBodyWithToken(
      schema.addOneRecord,
      permission.card_save.granted
    ),
    controller.postData
  );
router
  .route(permission.card_update.path)
  .put(
    validator.validateBodyWithToken(
      schema.updateOneRecord,
      permission.card_save.granted
    ),
    controller.putData
  );
router
  .route(permission.card_remove.path)
  .delete(
    validator.validateHeader(permission.card_save.granted),
    controller.deleteData
  );

module.exports = router;
