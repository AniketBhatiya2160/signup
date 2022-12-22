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
      <div className="bg">
      <div
        className="container cardContainer "
        style={{ marginTop: "50px" }}
      >
        {cars.map((car) => (
          <div className="col-sm-6 mb-4 " key={car.r_id}>
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

                <div className="card-text">Selling price :${car.s_price}</div>

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
         <Gototop/>
      </div>
      </div>
    </div>
  );
};

export default Allcar;
