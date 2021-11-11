import React from "react";
import Form from "../form/Form";

export const Section1 = () => {
  return (
    <div className="section__">

      <div className="grid-form">
        <div className="grid-form__text">
          <h3>
            ¡Ahorra desde el primer día!
          </h3>
            Apostamos por la energía barata, limpia y cercana.
            Por eso confiamos en TotalEnergies para que contrates la energía de tu hogar.
            Ahora podrás llevarte hasta un 35% de descuento en tu consumo de luz.
            ¡Aprovecha esta oferta límitada!
        </div>
        <div className="grid-form__form">
          <Form />
        </div>
      </div>

    </div>
  )
};

export default Section1;
