import React, { useRef } from "react";
import Card from "../cards/Card";


const Section4 = ({ width, data }) => {
  const url  = "https://specials.mediamarkt.es/assets-react/soluciones-energeticas/640x360_edptotal_logo.jpg";
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
              Regístrate
          </button>
        </a>  
      {/* )} */}
    </div>
  );
};

export default Section4;
