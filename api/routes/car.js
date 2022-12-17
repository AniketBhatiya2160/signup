import express from "express";
import { addcar, getcar } from "../controllers/car.js";

const router = express.Router();

router.post("/addcar", addcar);
router.get("/getcar/:id", getcar);

export default router;
