exports.permit = (...allowed) => {
  const isAllowed = role => {
    return allowed.indexOf(role) > -1;
  };
  return (req, res, next) => {
    console.log("Current user", req.user);
    if (req.user && isAllowed(req.user.role)) next();
    else res.json({ success: false, message: "Unauthorized" });
  };
};
