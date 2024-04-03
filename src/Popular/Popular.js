import React from "react";
import Card from "../ShopCard/ShopCard";
import { Container, Row, Col } from "react-bootstrap";
import "./Popular.css";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";

function Popular() {
  return (
    <Container className="popular">
      <h2 className="popular-header">Популярные товары</h2>
      <Row>
        <Col xs={12} md={3} className="col">
          <Card
            image={image4}
            header={"230 рублей"}
            text="Лопатка кулинарная «Стопапупа», дерево"
          />
        </Col>
        <Col xs={12} md={3} className="col">
          <Card
            image={image5}
            header={"175 рублей"}
            text="Кисточка кулинарная «Кулябяка», 22 см, силикон, дерево"
          />
        </Col>
        <Col xs={12} md={3} className="col">
          <Card
            image={image6}
            header={"175 рублей"}
            text="Лепестки декоративные «Роза», 100 г."
          />
        </Col>
        <Col xs={12} md={3} className="col">
          <Card
            image={image6}
            header={"175 рублей"}
            text="Лепестки декоративные «Роза», 100 г."
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Popular;
