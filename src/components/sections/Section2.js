import React from "react";
import CardTextGrid from "../cards/CardTextGrid";

const Section2 = ({ data }) => {
  return (
      <div className="section">
      <div>
        <p>Nuestra propuesta incluye:</p>
      </div>
      <CardTextGrid data={data}/>
      </div>
  )
};

export default Section2;
