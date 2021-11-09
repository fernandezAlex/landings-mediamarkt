import React from "react";
import SliderBig from "../carousel/SliderBig";
import SliderSmall from "../carousel/SliderSmall";


const Section3 = ({width, data}) => {
  return (
    <div className="section__">
      {
        width < 900
        ? (
            <div>
              <h1 className="title">Elige la opción que mejor se adapta a ti</h1>
              <SliderSmall data={data}/>
            </div>
         ) : (
          <div>
            <h1 className="title">Elige la opción que mejor se adapta a ti</h1>
            <SliderBig data={data}/>
          </div>
         )
    } 
    </div>
  );
};

export default Section3