const express = require("express");
const {
  signin,
  get,
  signup,
  getDashboard,
  edit,
  me
} = require("../controllers/admin.controller.js");
const { verifyToken } = require("../utils/Auth.js");
const router = express.Router();

router.post("/signin", signin);
router.post("/edit/:id", edit);

router.post("/signup", signup);
router.get("/get", verifyToken, get);
router.get("/me", verifyToken, me);
router.get("/getDashboard/:id", verifyToken, getDashboard);

module.exports = router;