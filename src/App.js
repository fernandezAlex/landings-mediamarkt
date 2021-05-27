import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Form from "./components/form/Form";
import {cardsSection} from './data/cards';
// import Stepper from "./components/stepper/Stepper";


import TimeLine from "./components/timeline/TimeLine_";


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
      <Section2 data={cardsSection} width={width}/>
      <Section3 width={width}/>
      <Form />
      {/* <Stepper /> */}

    </>
  );
}

export default App;
