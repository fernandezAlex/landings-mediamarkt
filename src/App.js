import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Form from "./components/form/Form";
import {cardsSection, cardsInfoSection} from './data/cards'
import SectionIntro from "./components/SectionIntro";
import CardSection from './components/cards/CardSection'




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
      <SectionIntro />
      <Section1 data={cardsSection} width={width}/>
      <Section2 data={cardsInfoSection} width={width}/>
      {/* <CardSection data={cardLastSection}/> */}
      <Form />
    </>
  );
}

export default App;
