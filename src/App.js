import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import {cardsSection, cardsSection2, cardsSection3} from './data/cards';
import dataHeader from './data/dataHeader';
import Accordion from './components/faqs/Accordion';
import {FloatButton} from './components/buttons/FloatButton'

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
      <Section3 data={cardsSection3} width={width}/>
      <Section5 data={cardsSection2} width={width}/>
      <Accordion/>
      <FloatButton/>
    </>
  );
}

export default App;
