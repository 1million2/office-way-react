import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./ShopCard.module.css";

const ShopCard = (props) => {

  return (

    <Col xs="12" sm="6" md="6" lg="4" className={classes.card}>
      <Card className={classes.cardBody}>
        <Card.Body>
          <Card.Title>{props.header}</Card.Title>
          <div className={classes.cardImg}>
            <Card.Img variant="top" src={props.img} />
            <p className={classes.price}>{props.price}</p>
          </div>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Link to={props.path}><Button>перейти</Button></Link>
        </Card.Body>
      </Card>
    </Col>

  )
};

export default ShopCard;