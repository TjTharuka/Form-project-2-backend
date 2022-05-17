// import validator Schemas
const express = require('express');
const schema = require('./notification.schema');
// import controllers
const controller = require('./notification.controller');
// import Validator class
const validator = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const {
  notification_get_all,
  notification_get_by_id,
  notification_save,
  notification_update,
  notification_remove,
} = require('./notification.permission').permission_list;

router.route(notification_get_all.path).get(controller.getAll);
router.route(notification_get_by_id.path).get(controller.getOne);
router
  .route(notification_save.path)
  .post(
    validator.validateBodyWithToken(
      schema.addOneRecord,
      notification_save.granted
    ),
    controller.post
  );
router
  .route(notification_update.path)
  .put(
    validator.validateBodyWithToken(
      schema.updateOneRecord,
      notification_update.granted
    ),
    controller.put
  );
router
  .route(notification_remove.path)
  .delete(
    validator.validateHeader(notification_save.granted),
    controller.delete
  );

module.exports = router;
