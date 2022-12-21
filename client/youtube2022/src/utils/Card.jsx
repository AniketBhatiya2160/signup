import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Oheader from "../components/Oheader";

const Card = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`http://10.0.1.205:8800/api/cars/allcar`);
        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Oheader />
      <div
        className="container cardContainer d-flex"
        style={{ marginTop: "50px" }}
      >
        {cars.map((car) => (
          <div className="row " key={car.r_id}>
            <div className="">
              <div className="card-sl">
                <div className="card-image">
                  <img
                    src={`../uploads/${JSON.parse(car.img)[0]}`}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>

                <div className="card-heading">
                  <Link to={`/alldetails/${car.r_id}`}>{car.c_name}</Link>
                </div>
                <div className="card-text">Model name: {car.model}</div>
                <div className="card-text">Miles covered: {car.miles}</div>

                <div className="card-text">Selling price :${car.s_price}</div>

                {/* <a
                  onClick={() => handleDelete(car.r_id)}
                  className="card-button"
                >
                  Delete
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
