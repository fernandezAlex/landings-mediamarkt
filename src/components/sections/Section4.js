import React, { useRef } from "react";
import Card from "../cards/Card";


const Section4 = ({ width, data }) => {
  return (
    <div className="section__">
      <h2>
        ¿Por qué elegir TotalEnergies?
      </h2>
      {/* {width > 650 ? (
        data.map((data) => <CardSection data={data} />)
      ) : ( */}
        <div className="card__section__wrapper">
          {data.map((data) => (
            <Card data={data} />
          ))}
        </div>
        <h3>
          Regístrate aquí y empieza a ahorrar en tu factura de la luz y/o gas.
        </h3>
        <a href="#campaign-form">
          <button  className="button_mm">
            Quiero ahorrar
          </button>
        </a>  
      {/* )} */}
    </div>
  );
};



export default Section4;
