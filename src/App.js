import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section4 from "./components/sections/Section4";
import Form from "./components/form/Form";
import {imgSection, cardLastSection} from './data/cards'
import { Nav } from "./components/nav/Nav";
import SectionIntro from "./components/SectionIntro";
import CardSection from './components/cards/CardSection'
import {FullImage} from './components/image/FullImage.jsx'




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
      <FullImage width={width} data={imgSection}/>
      <Section4 />
      <CardSection data={cardLastSection}/>
      <Form />
    </>
  );
}

export default App;
