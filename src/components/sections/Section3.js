import React from "react";
import CardGrid from "../cards/CardGrid";
import SliderSmall from "../carousel/SliderSmall";

const Section3 = ({width, data}) => {
  return (
    <div className="section">
      {
        width < 1450 
        ? (
            <div>
            {/* <h1 className="title">Soluciones a medida para escuelas, centros de formación y universidades</h1> */}
            <SliderSmall data={data}/>
            </div>
        ) : (
            <div>
            {/* <h1 className="title">Soluciones a medida para escuelas, centros de formación y universidades</h1> */}
            <CardGrid data={data} />
            </div>
        )
    }
    </div>
  );
};

export default Section3