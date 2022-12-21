import express from "express";
import jwt from "jsonwebtoken";

import {
  addcar,
  allcar,
  deletecar,
  exceptuser,
  getcar,
  getCarsById,
  getCarsByUId,
  updatecar,
} from "../controllers/car.js";

const router = express.Router();

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "jwtkey", (err, user) => {
      if (err) {
        return res.status(403).json("token is not valid");
      }
      console.log(user);
      req.currentUser = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated");
  }
};

router.post("/addcar", verify, addcar);
router.get("/getcar/:id", verify, getcar);

router.get("/exc/:id", verify, exceptuser);

router.get("/allcar", allcar);
router.get("/getcarsbyid/:r_id", verify, getCarsById);
router.get("/getcarsbyuid/:r_id", getCarsById);
router.delete("/deletecar/:r_id", verify, deletecar);
router.put("/upadatecar/:r_id", verify, updatecar);

export default router;
