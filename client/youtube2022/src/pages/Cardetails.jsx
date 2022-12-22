import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "react-bootstrap/Carousel";
import { AuthContext } from "../context/authContext";

const Cardetails = () => {
  const { currentUser } = useContext(AuthContext);
  const params = useParams();
  const { r_id } = params;
  //for getting pid with help of params
  const [cars, setCars] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://10.0.1.205:8800/api/cars/getcarsbyid/${r_id}`, {
          headers: { authorization: `Bearer ${currentUser.token}` },
        })
        .then((response) => setCars(response.data));
    };
    fetchData();
  }, [r_id]);

  return (
    <div>
      <Header />
      <div className="   d-flex flex-column" style={{ marginTop: "50px" }}>
        <div className="ABody">
          {cars?.map((car) => {
            return (
              <>
                <div className="csel">
                  <Carousel>
                    {JSON.parse(car.img).map((e, index) => (
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={`../uploads/${e}`}
                          alt="car?.p_name"
                        />
                        )
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="ditem2">
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h1>{car?.c_name}</h1>
                    </ListGroup.Item>
                    <ListGroup.Item>Price:${car?.s_price}</ListGroup.Item>
                    <ListGroup.Item>Model Name:{car?.model}</ListGroup.Item>
                    <ListGroup.Item>Registartion:{car?.car_n}</ListGroup.Item>
                    <ListGroup.Item>Miles:{car?.miles}</ListGroup.Item>

                    <ListGroup.Item>
                      <div className="d-grid">
                        <Link to={`/upadatecar/${car.r_id}`} state={cars}>
                          <div className="card-button">Update</div>
                        </Link>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cardetails;
