import { Router } from "express";
import {
  signin,
  get,
  signup,
  getDashboard,
  edit,
  me,
} from "../controllers/customer.controller.js";
import { verifyToken } from "../utils/Auth.js";
const router = Router();

router.post("/signin", signin);
router.post("/edit/:id", edit);

router.post("/signup", signup);
router.post("/get", verifyToken, get);
router.post("/me", verifyToken, me);
router.post("/getDashboard/:id", verifyToken, getDashboard);

export default router;
