import { addGuest } from "../controllers/guestController.js";
import express from "express";

const router = express.Router();

router.route("/").post(addGuest);

export default router;