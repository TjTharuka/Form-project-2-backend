const userRouter = require('../src/users/users.router');
const paperRouter = require('../src/paper/paper.router');
const userAnswersRouter = require('../src/userAnswers/userAnswers.router');
const filesRouter = require('../src/file-uploader/files.router');
// create router
const router = require("express").Router();
// Import body parser
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json({ limit: "50mb" }));
router.use(bodyParser.json());
router.use(
  bodyParser.text({
    limit: "50mb",
    type: "*/xml",
  })
);

// set user routes
router.use("/users", userRouter);
// set paper routes
router.use("/papers", paperRouter);
// set user answer routes
router.use("/userAnswers",userAnswersRouter);

// set image routes
router.use("/files", filesRouter);

module.exports = router;
