import express from "express";
import { loginFbUser } from "../controllers/auth.controller.js";
import { validateFbLoginInput } from "../middlewares/validateRequest.js";

const router = express.Router();

router.post("/login", validateFbLoginInput, loginFbUser);

export default router;


