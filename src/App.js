import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Form from "./components/form/Form";
import Accordion from "./components/faqs/Accordion";
import {cardsSection2, cardsSection2Apple, cardsSection3, cardsSection4} from "./data/cards"

const dat = new Date();
const date = dat.getDate() + "/" + (dat.getMonth() +1) + "/" + dat.getFullYear();
console.log(date);

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

  date > "10/08/2021" ? console.log("fecha pasada") : console.log("fecha sin llegar");

  return (
    <>
      <Header />
      <Section1 width={width}/>
      <Section2 data={ date > "23/08/2021" ? cardsSection2Apple : cardsSection2} width={width}/>
      <Section3 data={cardsSection3} width={width}/>
      <Section4 data={cardsSection4} width={width}/>
      <Form/>
      <Accordion />
    </>
  );
}

export default App;
