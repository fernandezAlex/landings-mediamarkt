import React from "react";
import CardGrid from "../cards/CardGrid";
import SliderSmall from "../carousel/SliderSmall";

const Section3 = ({width, data}) => {
  return (
    <div className="section">
      {
        width < 843 
        ? (
            <div>
            <h1 className="title">Soluciones a medida para tu comercio</h1>
            <SliderSmall data={data}/>
            </div>
        ) : (
            <div>
            <h1 className="title">Soluciones a medida para tu comercio</h1>
            <CardGrid data={data} />
            </div>
        )
    }
    </div>
  );
};

export default Section3