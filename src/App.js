import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Form from "./components/form/Form";
import Accordion from "./components/faqs/Accordion";
import Slideshow from './components/carousel/Slideshow';
import {cardsSection2, cardsSection2Apple, cardsSection3, cardsSection4} from "./data/cards"
import {dataSlider} from "./data/dataSlider"

const App = () => {
  const [width, setWidth] = useState(document.body.clientWidth);

  const today = new Date();

  const limitDate = new Date('2022,01,01');


  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      const width = document.body.clientWidth;
      setWidth(width);
    }, 100);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <>
      <Header />
      <Section1 width={width}/>
      <Section2 data={ today < limitDate ? cardsSection2Apple : cardsSection2} width={width}/>
      <Section3 data={cardsSection3} width={width}/>
      <Section4 data={cardsSection4} width={width}/>
      <Form/>
      <Slideshow
        controls={true}
        autoplay={false}
        speed="500"
        interval="5000"
        textColor="white"
        bgTextColor=""
        data={dataSlider}
      />
      <Accordion />
    </>
  );
}

export default App;
