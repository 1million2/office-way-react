import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";


const NavBar = () => {
  return (
    <Navbar expand="md">

      <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes.navBtn} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link as={NavLink} to="/">Главная</Nav.Link>
          <Nav.Link as={NavLink} to="/about">О проекте</Nav.Link>
          <NavDropdown title="Магазины" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/bonus">ТЦ "Бонус"</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/riga">ТЦ "Рига"</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/shevch">Шевченко 12</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to="/map">Магазины на карте</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/partners">Партнеры</Nav.Link>
          <Nav.Link as={NavLink} to="/goods">Преимущества</Nav.Link>
          <Nav.Link as={NavLink} to="/contacs">Контакты</Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
};

export default NavBar;