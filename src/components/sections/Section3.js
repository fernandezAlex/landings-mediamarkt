import React from "react";
import CardGrid from "../cards/CardGrid";
import SliderSmall from "../carousel/SliderSmall";

const Section3 = (width) => {
  return (
    <div className="section">
      {
        width.width < 824

          ? (
            <div>
              <h1 className="title">Nuestras soluciones adaptadas</h1>
              <SliderSmall />
            </div>
          ) : (
            <div>
              <h1 className="title">Nuestras soluciones adaptadas a cada sector</h1>
              <CardGrid />
            </div>
          )
      }
    </div>
  );
};

export default Section3