import { db } from "../db.js";
// import jwt from "jsonwebtoken";

export const getcar = (req, res) => {
  const q = "select*from cars where id=?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.send(err);
    return res.status(200).json(data);
  });
};

export const getCarsById = (req, res) => {
  const { r_id } = req.params;

  if (!r_id) res.status(400).send("Id not found");

  const q = `select * from cars where r_id=${r_id}`;

  db.query(q, (err, data) => {
    if (err) {
      console.log("error", error);
      return res.send(err);
    }
    console.log(res, "res");
    return res.status(200).json(data);
  });
};

export const addcar = (req, res) => {
  const q = "SELECT * FROM cars WHERE car_n=?";
  console.log("aniket2");
  db.query(q, [req.body.car_n], (err, data) => {
    console.log("aniket1");
    if (err) return res.status(500).json(err);
    if (data.length)
      return res.status(409).json("car  registration number must be unique!");
    console.log("aniket");

    const q =
      "INSERT INTO `cars` (`c_name`, `model`, `date`, `miles`, `s_price`,`img`,`id`,`car_n`) VALUES (?)";

    const values = [
      req.body.c_name,
      req.body.model,
      req.body.date,
      req.body.miles,
      req.body.s_price,
      req.body.img,
      req.body.id,
      req.body.car_n,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("car has been added.");
    });
  });
};

export const deletecar = (req, res) => {
  const q = "Delete from cars where r_id=?";
  db.query(q, [req.params.r_id], (err, data) => {
    if (err) {
      return res.json(err);
    }
    return res.json("Car data deleted!");
  });
};

export const updatecar = (req, res) => {
  const { r_id } = req.params;

  const q =
    "Update cars set c_name=?,model=?,date=?,miles=?,s_price=?,img=?,id=?,car_n=?   where r_id=?";
  const values = [
    req.body.c_name,
    req.body.model,
    req.body.date,
    req.body.miles,
    req.body.s_price,
    req.body.img,
    req.body.id,
    req.body.car_n,
  ];

  db.query(q, [...values, r_id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Product Updated");
  });
};
