import express from "express";
import { signin, signup } from "../controllers/user.js";
router.post("/signin", signin);
router.post("/signup", signup);
export default router;
