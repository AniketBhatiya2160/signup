import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "react-bootstrap/Carousel";
import Oheader from "../components/Oheader";

const CardDetails = () => {
  const params = useParams();
  const { r_id } = params;
  //for getting pid with help of params
  const [cars, setCars] = useState();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://10.0.1.205:8800/api/cars/getcarsbyuid/${r_id}`)
        .then((response) => setCars(response.data));
    };
    fetchData();
  }, [r_id]);

  return (
    <div>
        <Oheader/>
      <div className="d-flex flex-column" style={{ marginTop: "50px" }}>
        <Container>
          <div className="ABody">
            {cars?.map((car) => {
              return (
                <Row key={car.r_id}>
                  <Col md={6} key={car.r_id}>
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
                  </Col>
                  <Col md={6}>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <h1>{car?.c_name}</h1>
                      </ListGroup.Item>
                      <ListGroup.Item>Price:${car?.s_price}</ListGroup.Item>
                      <ListGroup.Item>Model Name:{car?.model}</ListGroup.Item>
                      <ListGroup.Item>Registartion:{car?.car_n}</ListGroup.Item>
                      <ListGroup.Item>Miles:{car?.miles}</ListGroup.Item>
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

export default CardDetails;
