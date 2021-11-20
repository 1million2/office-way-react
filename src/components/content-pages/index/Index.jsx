import React from "react";
import { Container, Row } from "react-bootstrap";
import classes from "./Index.module.css";
import ShopCard from "./ShopItem/ShopCard";
import imga from "../../../shop-images/img5.jpg";

const Index = (props) => {

  // мапим карточки магазинов
  const ShopItem = props.state.map((item, idx) => <ShopCard header={item.header} price={item.price} description={item.description} img={imga} path={item.path} key={idx} />)

  return (
    <Container>
      <div className={classes.heading}>
        <h1>Начни свой бизнес прямо сейчас</h1>
        <h3>Продажа готового бизнеса</h3>
        <h4>Сеть фирменных магазинов канцтоваров "Darvish"</h4>
      </div>
      <Row>
        {ShopItem}
      </Row>
    </Container>
  )
};

export default Index;