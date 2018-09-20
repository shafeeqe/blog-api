var express = require("express");
var router = express.Router();
const permit = require("../security/permission").permit;

/* GET users listing. */
router.get("/", permit("ADMIN", "USER"), function(req, res, next) {
  res.send("respond with user home");
});

module.exports = router;
