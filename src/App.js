import React from 'react';
import {DataShopItems, img, img2} from "./state";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Index from './components/content-pages/index/Index';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';


function App() {
  return (
    <>
      <Header/>
      <Slider />
      <hr/>
      <Index state={DataShopItems} img={img} img2={img2}/>
      <hr/>
      <Footer/>
    </>
  );
}

export default App;
