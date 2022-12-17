import express from "express";
import { addcar, deletecar, getcar } from "../controllers/car.js";

const router = express.Router();

router.post("/addcar", addcar);
router.get("/getcar/:id", getcar);
router.delete("/deletecar/:r_id", deletecar);
export default router;
