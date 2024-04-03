import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import "./Header.css";

const VerticalLine = () => <div className="d-none d-lg-block vertical-line" />;
const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="custom-navbar"
    >
      <div className="navbar-header  d-lg-none">
        <Navbar.Brand href="#home" className="navbar-logo">
          <img src={logo} alt="Logo" className="custom-brand" />
        </Navbar.Brand>
        <Navbar.Toggle style={{ marginLeft: "auto", marginTop: "35px" }} />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="p-3 mx-auto justify-content-center align-items-center">
          <Nav.Link className="nav-link nav-item" href="#catalog">
            Каталог
          </Nav.Link>
          <VerticalLine />
          <Nav.Link className="nav-link nav-item" href="#delivery">
            Доставка
          </Nav.Link>
          <Navbar.Brand href="#home" className="d-none d-lg-block mx-auto">
            <img src={logo} alt="Logo" className="custom-brand" />
          </Navbar.Brand>
          <Nav.Link className="nav-link nav-item" href="#about">
            О нас
          </Nav.Link>
          <VerticalLine />
          <Nav.Link className="nav-link nav-item" href="#contact">
            Контакты
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
