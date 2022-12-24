import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Gototop from "../components/Gototop";
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
      <div >
      <div className="container col-12 ">
          <div className="row justify-content-center">
            {cars.map((car) => (
              <div className="col-3 m-3 " key={car.r_id}>
                <div className="card">
                  <img
                    className="card-img-top "
                    src={`../uploads/${JSON.parse(car.img)[0]}`}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/exdetails/${car.r_id}`}>{car.c_name}</Link>
                    </h5>
                    {/* {/ <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> /} */}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Model Name: {car.miles}</li>
                    <li className="list-group-item">
                      Selling price: {car.s_price}
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <Gototop />
        </div>
      </div>
    </div>
  );
};

export default Card;
