import React, { useEffect, useState } from "react";
import debounce from "./helpers/debounce";
import Header from "./components/header/Header";
import SectionImg from "./components/SectionImg";
import CardsGrid from "./components/cards/CardsGrid";
import Form from "./components/form/Form";
import {TextSection} from "./components/TextSection";
import {Quotes} from "./components/Quotes"
import {dataHeader} from "./data/header"
import {cardsGrid} from "./data/cards"
import {imgTextSection} from "./data/imgTextSection"
import {quotesSection,quotesSection2} from "./data/quotes"
import {textSection,textSection2} from "./data/textSection"


const App = () => {
  const [width, setWidth] = useState(document.body.clientWidth);

  const today = new Date();

  const limitDate = new Date('2022,01,01');


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
      <Header data={dataHeader} />
      <SectionImg data={imgTextSection} width={width}/>
      <CardsGrid data={cardsGrid} width={width}/>
      <Form />
    </>
  );
}

export default App;
