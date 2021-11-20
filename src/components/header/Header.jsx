import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { Col, Container, Row } from "react-bootstrap";
import logo from "./logo_blue.svg";
import MyModal from "./Modal";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <Container className={classes.header}>
      <Row className={classes.headerBody}>
        <Col sm="6" md="3" className={classes.headerLogo}>
          <NavLink to="index" className={classes.headerLink}>
            <img src={logo} alt="logo" />
          </NavLink>
        </Col>
        <Col className={classes.description}>
          <p>Офис</p>
          <p>Творчество</p>
          <p>Детские игрушки</p>
          <p>Товары для школы</p>
        </Col>
        <Col>
          <div className={classes.headerMail}>
            <p>Пишите нам на почту:</p>
            <a href="mailto:makarichak1209@gmail.com">makarichak1209@gmail.com</a>
          </div>
          <div className={classes.headerPhone}>
            <p>Звоните нам на почту:</p>
            <a href="tel:+375291579017">+375(29)157-90-17</a>
          </div>
        </Col>
        <Col xs="12" sm md lg className={classes.modal}>
            <MyModal />
        </Col>
      </Row>
      <NavBar />
    </Container>
  )
};

export default Header