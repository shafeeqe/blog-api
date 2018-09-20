const express = require("express");
const router = express.Router();

const controller = require("../controllers/categoryController");

router.get("/list", controller.getAllCategories);

module.exports = router;
