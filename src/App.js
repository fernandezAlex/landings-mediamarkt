import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section3 from "./components/sections/Section3";
import Form from "./components/form/Form";
import {cardsSection2} from './data/cards'
import {headerData} from './data/header'
import {breadcrumbData} from './data/breadcrumb';



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
      <Header data={headerData} dataBreadcrumb={breadcrumbData} />
      <Section3 data={cardsSection2} width={width}/>
      <Form />
    </>
  );
}

export default App;
