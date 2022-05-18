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
router.use("/users", require("../src/users/users.router"));
// set paper routes
router.use("/papers", require("../src/paper/paper.router"));
// set user answer routes
router.use("/userAnswers", require("../src/userAnswers/userAnswers.router"));

// set image routes
router.use("/files", require("../src/file-uploader/files.router"));

module.exports = router;
