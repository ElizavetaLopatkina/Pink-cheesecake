import React from "react";
import Card from "react-bootstrap/Card";
import "./ShopCard.css";

function ShopCard({ image, header, text }) {
  return (
    <Card
      className="shop-card"
      style={{ width: "19rem", border: "1px solid #926B5D" }}
    >
      <Card.Img className="img-fluid" variant="top" src={image} />
      <Card.Body>
        <Card.Title className="shop-card-header">{header}</Card.Title>
        <Card.Text className="shop-card-text">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ShopCard;
