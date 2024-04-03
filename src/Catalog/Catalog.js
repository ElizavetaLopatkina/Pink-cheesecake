// Catalog.js
import React from "react";
import Card from "../ShopCard/ShopCard";
import { Container, Row, Col } from "react-bootstrap";
import "./Catalog.css";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";

function Catalog() {
  return (
    <Container className="catalog">
      <h2 className="catalog-header">Каталог</h2>
      <Row>
        <Col className="col">
          <Card image={image4} header={"230 рублей"} text="Лопатка кулинарная «Стопапупа», дерево" />
        </Col>
        <Col className="col">
          <Card image={image5} header={"175 рублей"} text="Кисточка кулинарная «Кулябяка», 22 см, силикон, дерево" />
        </Col>
        <Col className="col">
          <Card image={image6} header={"175 рублей"} text="Лепестки декоративные «Роза», 100 г." />
        </Col>
        <Col className="col">
          <Card image={image4} header={"230 рублей"} text="Лопатка кулинарная «Стопапупа», дерево" />
        </Col>
      </Row>
      <Row>
        <Col className="col">
          <Card image={image5} header={"175 рублей"} text="Кисточка кулинарная «Кулябяка», 22 см, силикон, дерево" />
        </Col>
        <Col className="col">
          <Card image={image6} header={"175 рублей"} text="Лепестки декоративные «Роза», 100 г." />
        </Col>
        <Col className="col">
          <Card image={image4} header={"230 рублей"} text="Лопатка кулинарная «Стопапупа», дерево" />
        </Col>
        <Col className="col">
          <Card image={image5} header={"175 рублей"} text="Кисточка кулинарная «Кулябяка», 22 см, силикон, дерево" />
        </Col>
      </Row>
    </Container>
  );
}

export default Catalog;