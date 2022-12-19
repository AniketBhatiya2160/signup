import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from "../context/authContext";

const Allcar = () => {
  const { currentUser } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          `http://10.0.1.205:8800/api/cars/getcar/${currentUser.id}`
        );
        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  const handleDelete = async (r_id) => {
    try {
      await axios.delete(`http://10.0.1.205:8800/api/cars/deletecar/${r_id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
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
                  <Link to={`/cardetails/${car.r_id}`}>{car.c_name}</Link>
                </div>
                <div className="card-text">Model name: {car.model}</div>
                <div className="card-text">Miles covered: {car.miles}</div>
                {/* <div className="card-text">Date of Purchase: {car.date}</div> */}
                <div className="card-text">Selling price :${car.s_price}</div>
                {/* <a href="#" className="card-button">
                  <Link to={`/upadatecar/${car.r_id}`}>Upadate</Link>
                </a> */}
                <a
                  onClick={() => handleDelete(car.r_id)}
                  className="card-button"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allcar;
