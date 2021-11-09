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
          ¡Ahorra desde el primer día!
          En MediaMarkt apostamos por la energía renovable y la eficiencia energética. Por eso confiamos en TotalEnergies para traer la energía limpia, barata y cercana a tu hogar. 
          Te calculamos en el acto cuanto te ahorrarás contratando TotalEnergies
        </div>
        <div className="grid-form__form">
          <Form />
        </div>
      </div>

    </div>
  )
};

export default Section1;
