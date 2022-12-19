import axios from "axios";
import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

const Cardetails = () => {
  const params = useParams();
  const { r_id } = params;
  //for getting pid with help of params
  const [cars, setCars] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://10.0.1.205:8800/api/cars/getcarsbyid/${r_id}`)
        .then((response) => setCars(response.data));
    };
    fetchData();
  }, [r_id]);
  return (
    <div>
      <Header />
      <div className="d-flex flex-column" style={{ marginTop: "50px" }}>
        <Container>
          <div className="ABody">
            {cars?.map((car) => {
              return (
                <Row key={car.r_id}>
                  <Col md={6} key={car.r_id}>
                    <img
                      className="img-large"
                      src={`../uploads/${JSON.parse(car.img)[0]}`}
                      alt={car?.p_name}
                    ></img>
                  </Col>
                  <Col md={6}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <h1>{car?.c_name}</h1>
                      </ListGroup.Item>
                      <ListGroup.Item>Price:${car?.s_price}</ListGroup.Item>
                      <ListGroup.Item>Model Name:{car?.model}</ListGroup.Item>
                      <ListGroup.Item>Registartion:{car?.car_n}</ListGroup.Item>
                      {/* <ListGroup.Item>Model Name:{car?.model}</ListGroup.Item> */}
                      <ListGroup.Item>
                        <div className="d-grid">
                          <Link to={`/upadatecar/${car.r_id}`} state={cars}>
                            <div className="card-button">Update</div>
                          </Link>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Col>
                </Row>
              );
            })}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Cardetails;
