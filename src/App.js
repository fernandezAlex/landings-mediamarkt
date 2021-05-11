import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section4 from "./components/sections/Section4";
import Form from "./components/form/Form";
import {cardsSection1, cardsSection2} from "./data/cards"



const App = () => {
  const [width, setWidth] = useState(document.body.clientWidth);

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
      <Section2 data={cardsSection1} width={width}/> 
      <Section4 data={cardsSection2} width={width}/>
      <Form/>
    </>
  );
}

export default App;
