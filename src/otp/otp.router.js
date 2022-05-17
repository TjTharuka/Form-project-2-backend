// import validator Schemas
const express = require('express');
const schema = require('./otp.schema');
// import controllers
const controller = require('./otp.controller');
// import Validator class
const validator = require('../../validators/validator');
// Import Express
// user router
const router = express.Router();
// import permission
const {
  otp_get_all,
  otp_get_by_id,
  otp_save,
  otp_update,
  otp_remove,
} = require('./otp.permission').permission_list;

router.route(otp_get_all.path).get(controller.getAll);
router.route(otp_get_by_id.path).get(controller.getOne);
router.route(otp_save.path).post(controller.post);
router.route(otp_update.path).put(controller.put);
router.route(otp_remove.path).delete(controller.delete);

module.exports = router;
