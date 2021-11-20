import React from "react";
import classes from "./Slider.module.css";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <Carousel controls={false} indicators={false} className={classes.sliderBody}>
      <Carousel.Item>
      <div className={classes.slider1}></div>
      </Carousel.Item>
      <Carousel.Item>
      <div className={classes.slider2}></div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={classes.slider3}></div>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;