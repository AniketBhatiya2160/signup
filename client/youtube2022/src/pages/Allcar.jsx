import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gototop from "../components/Gototop";


const Allcar = () => {
  const { currentUser } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          `http://10.0.1.205:8800/api/cars/getcar/${currentUser.id}`,
          { headers: { authorization: `Bearer ${currentUser.token}` } }
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
      await axios.delete(`http://10.0.1.205:8800/api/cars/deletecar/${r_id}`, {
        headers: { authorization: `Bearer ${currentUser.token}` },
      });
      window.location.reload();
      toast.success("successfully deleted car");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
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
                  <a
                  onClick={() => handleDelete(car.r_id)}
                  className="card-button"
                >
                  Delete
                </a>
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

export default Allcar;
