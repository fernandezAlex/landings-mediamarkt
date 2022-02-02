import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import SectionImg from "./components/SectionImg"
import CardsGrid from "./components/cards/CardsGrid"
import Form from "./components/form/Form";
import Accordion from "./components/faqs/Accordion";

import {dataHeader} from "./data/header"
import {cardsGrid,cardsSection} from "./data/cards"
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
      <Header data={dataHeader} />
      <SectionImg data={cardsSection} width={width}/>
      <CardsGrid data={cardsGrid} width={width}/>
      <Form/>
    </>
  );
}

export default App;
