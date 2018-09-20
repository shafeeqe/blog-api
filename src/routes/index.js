var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const jwtConfig = require("../../config").jwt;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send("Home page");
});

router.get("/login/:user/:password", function(req, res, next) {
  const params = req.params;
  if (params.user === "rex" && params.password === "abc") {
    const dummy = {
      id: 1234,
      name: "Rex",
      role: "USER"
    };
    const payload = {
      id: dummy.id,
      role: dummy.role
    };
    const token = jwt.sign(payload, jwtConfig.secret, jwtConfig.options);
    res.json({
      token,
      success: true,
      message: "Login success"
    });
  } else {
    res.json({
      success: false,
      message: "Wron credentials"
    });
  }
});

module.exports = router;
