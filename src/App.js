import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section4 from "./components/sections/Section4";
import Form from "./components/form/Form";
import {cardsSection, cardsSection2} from './data/cards';
import dataHeader from './data/dataHeader';
import Accordion from './components/faqs/Accordion'

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
      <Header data={dataHeader}/>
      <Section1 data={cardsSection} width={width}/>
      <Form />
      <Section2 data={cardsSection} width={width}/>
      <Section4 data={cardsSection2} width={width}/>
      <Accordion/>
    </>
  );
}

export default App;
