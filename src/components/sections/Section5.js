import React from "react";
import CardGrid from "../cards/CardGrid";
import SliderSmall from "../carousel/SliderSmall";

const Section3 = ({width, data}) => {
  return (
    <div className="section__">
      {
        width < 843 
        ? (
            <div>
            <h1 className="title">¿Por qué elegir TotalEnergies?</h1>
            <SliderSmall data={data}/>
            </div>
        ) : (
            <div>
            <h1 className="title">¿Por qué elegir TotalEnergies?</h1>
            <CardGrid data={data} />
            </div>
        )
    }

    <br/>
    <br/>
    </div>
  );
};

export default Section3