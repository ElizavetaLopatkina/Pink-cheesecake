import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Footer.css";
import icon7 from "../assets/7.png";
import icon8 from "../assets/8.png";
import emailjs from "emailjs-com";

const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message successfully sent!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <Container className="footer">
      <Row>
        <Col className="footer-nav" md={3}>
          <h5 className="footer-header-nav">НАВИГАЦИЯ</h5>
          <p className="footer-nav-text">Каталог</p>
          <p className="footer-nav-text">Доставка</p>
          <p className="footer-nav-text">О нас</p>
          <p className="footer-nav-text">Контакты</p>
        </Col>
        <Col md={3}>
          <h5 className="footer-header-contact">ОБРАТНАЯ СВЯЗЬ</h5>
          <Form onSubmit={sendEmail}>
            <Form.Group controlId="formBasicName">
              <Form.Control
                name="from_name"
                className="input-bg"
                type="text"
                placeholder="Введите имя"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                name="from_email"
                className="input-bg"
                type="email"
                placeholder="Введите Email или телефон"
              />
            </Form.Group>
            <Button className="button-submit" variant="primary" type="submit">
              Отправить
            </Button>
          </Form>
        </Col>
        <Col md={3}></Col>
        <Col md={3}></Col>
      </Row>
      <Row className="justify-content-between">
        <Col className="footer-copyright" md={6}>
          <p className="footer-copyright-text">info@pinkcake.ru</p>
          <p className="footer-copyright-text">
            Россия, 191186, Санкт-Петербург, ул. Большая Морская, 18
          </p>
          <p className="footer-copyright-text">
            Все права защищены. Блаблабла.
          </p>
        </Col>
        <Col xs={10} md={6} className="footer-icons d-flex justify-content-end">
          <img className="img-fluid footer-icon" src={icon7} alt="Icon 7" />
          <img
            style={{ marginRight: "65px" }}
            className="img-fluid footer-icon"
            src={icon8}
            alt="Icon 8"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
