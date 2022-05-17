// create router
const router = require('express').Router();
// Import body parser
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.json());
router.use(
  bodyParser.text({
    limit: '50mb',
    type: '*/xml',
  })
);

// set user routes
router.use('/users', require('../src/users/users.router'));
// set card routes
router.use('/cards', require('../src/card/card.router'));
// set schools routes
router.use('/schools', require('../src/school/school.router'));  
// set classroom routes
router.use('/classrooms', require('../src/classroom/classroom.router'));  
// set notification routes
router.use(
  '/notifications',
  require('../src/notification/notification.router')
);
// set otp routes
router.use('/otps', require('../src/otp/otp.router'));

// set image routes
router.use('/files', require('../src/file-uploader/files.router'));

module.exports = router;
