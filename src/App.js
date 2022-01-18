import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import CardsGrid from "./components/cards/CardsGrid"
import TextSection from "./components/TextSection"
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
      <TextSection />
      <Form />
    </>
  );
}

export default App;
