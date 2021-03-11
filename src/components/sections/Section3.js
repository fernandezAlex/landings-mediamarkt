import React from "react";
import CardGrid from "../cards/CardGrid";
import SliderSmall from "../carousel/SliderSmall";

const Section3 = (width) => {
  return (
    <div className="section">
      {
        width.width < 843 
        ? (
            <div>
            <h1 className="title">Soluciones a medida para escuelas, centros de formación y universidades</h1>
            <SliderSmall />
            </div>
        ) : (
            <div>
            <h1 className="title">Soluciones a medida para escuelas, centros de formación y universidades</h1>
            <CardGrid />
            </div>
        )
    }
    </div>
  );
};

export default Section3