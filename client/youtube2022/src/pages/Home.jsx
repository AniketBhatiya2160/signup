import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Gototop from "../components/Gototop";
import Header from "../components/Header";

// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          `http://10.0.1.205:8800/api/cars/exc/${currentUser.id}`,
          { headers: { authorization: `Bearer ${currentUser.token}` } }
        );
        setCars(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <Header />
      <div className="bg">
        <div className="container cardContainer " style={{ marginTop: "50px" }}>
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
                    <Link to={`/exdetails/${car.r_id}`}>{car.c_name}</Link>
                  </div>
                  <div className="card-text">Model name: {car.model}</div>
                  <div className="card-text">Miles covered: {car.miles}</div>

                  <div className="card-text">Selling price :${car.s_price}</div>
                </div>
              </div>
            </div>
          ))}
           <Gototop />
        </div>
      </div>
     
    </div>
  );
};

export default Home;
