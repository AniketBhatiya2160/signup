import express from "express";
import { addcar, deletecar, getcar, getCarsById, updatecar } from "../controllers/car.js";

const router = express.Router();

router.post("/addcar", addcar);
router.get("/getcar/:id", getcar);
router.get("/getcarsbyid/:r_id", getCarsById);
router.delete("/deletecar/:r_id", deletecar);
router.put("/upadatecar/:r_id", updatecar);
export default router;
