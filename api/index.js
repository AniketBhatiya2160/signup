import express from "express";
import authRoutes from "./routes/auth.js";
import carRoutes from "./routes/car.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

//for img :if we want to name img
const storage = multer.diskStorage({
  destination: "../client/youtube2022/public/uploads",
  filename: function (req, file, cb) {
    
    cb(null, Date.now() + file.originalname); //we want we apply other method here date for unique name
  },
});

const upload = multer({ storage });



app.post("/uploads", upload.array("img", 5), function (req, res) {
  const file = req.files;
  
  res.send(file);

 
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
