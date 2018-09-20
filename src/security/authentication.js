const jwt = require("jsonwebtoken");
const jwtConfig = require("../../config").jwt;

exports.authorize = (req, res, next) => {
  const AUTH_HEADER = "authorization";
  const HEADER_PREFIX = "Bearer ";
  const payload = req.headers[AUTH_HEADER];
  if (payload && payload.length > HEADER_PREFIX.length) {
    const tokenString = payload.substring(HEADER_PREFIX.length, payload.length);
    jwt.verify(
      tokenString,
      jwtConfig.secret,
      jwtConfig.options,
      (err, decoded) => {
        if (err) res.send({ success: false, message: err.message });
        else {
          req.user = decoded;
          next();
        }
      }
    );
  } else {
    res.json({
      success: false,
      message: "Invalid auth header"
    });
  }
};
