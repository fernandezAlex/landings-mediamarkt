import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
//import Section1 from "./components/sections/Section1";
//import Section3 from "./components/sections/Section3";
import Form from "./components/form/Form";
//import {cardsSection1} from './data/cards';
//import {cardsSection2, cardsBlack} from './data/cards'
import {headerData} from './data/header';
//import {breadcrumbData} from './data/breadcrumb';
import faqs from './data/faqs';
import Accordion from "./components/faqs/Accordion";
import {ThemeProvider} from "./context/ThemeProvider" 


function App() {

  //const today = new Date();
  //const limitDate = new Date('2021,11,29');

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
    <ThemeProvider>
      <Header data={headerData} />
      {/*<Section1 data={cardsSection1} />*/}
      <Form />
      {/*<Section3 data={(today>limitDate) ?  cardsSection2 : cardsBlack} width={width}/>*/}
      <Accordion data={faqs} width={width}/>
    </ThemeProvider>
  );
}

export default App;
