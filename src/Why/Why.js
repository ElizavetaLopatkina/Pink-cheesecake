import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import image1 from "../assets/2.jpg";
import image2 from "../assets/3.jpg";
import "./Why.css";

const Why = () => {
  return (
    <Container className="why">
      <h2 className="why-header">Почему стоит выбрать нас?</h2>
      <Row>
        <Col xs={12} md={4}>
          <Image className="image1" src={image1} alt="Image" fluid />
        </Col>
        <Col xs={12} md={8}>
          <h2 className="sub-header1">1 Доставляем на дом</h2>
          <p className="sub-text1">
            Самовывоз 24 часа. Курьерская доставка на дом по СПб и Лен.области.
          </p>
          <h2 className="sub-header1">2 Выдаем напрокат</h2>
          <p className="sub-text1">Прокат кондитерских форм и приспособлений</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <h2 className="sub-header2">3 Фотопечать</h2>
          <p className="sub-text2">Печатаем на кондитерский изделиях</p>
          <h2 className="sub-header2">4 Консультируем по ассортименту</h2>
          <p className="sub-text2">
            Индивидуальные консультации по подбору оптимального решения.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <Image className="image2" src={image2} alt="Image" fluid />
        </Col>
      </Row>
    </Container>
  );
};

export default Why;
