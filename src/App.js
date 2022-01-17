import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import CardsGrid from "./components/cards/CardsGrid"
import Form from "./components/form/Form";
import {cardsGrid, cardsSection1, cardsSection2} from './data/cards'


function App() {
  const [width, setWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      const width = document.body.clientWidth;
      setWidth(width);
    }, 50);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  
  return (
    <>
      <Header />
      {/* <Section1/> */}
      <CardsGrid data={cardsGrid} width={width}/>
      {/* <Section2 data={cardsSection1} width={width}/> */}
      {/* <Section3 data={cardsSection2} width={width}/> */}
      <Form />
    </>
  );
}

export default App;
