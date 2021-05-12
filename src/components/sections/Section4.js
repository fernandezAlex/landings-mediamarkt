import React from "react";
import Card from "../cards/Card";
// import CardSection from "../cards/CardSection";

const Section4 = ({ width, data }) => {
  const url  = "https://specials.mediamarkt.es/assets-react/soluciones-energeticas/640x360_edptotal_logo.jpg";
  return (
    <div className="section">
      <h1 className="title">
        Asegura un año de descuento fijo para tu negocio o empresa
      </h1>
      {/* {width > 650 ? (
        data.map((data) => <CardSection data={data} />)
      ) : ( */}
        <div className="card__section__wrapper">
          {data.map((data) => (
            <Card data={data} />
          ))}
          
        </div>
        <div className="img__section">
            <div className="__img"  style={{ backgroundImage: `url('${url}')` }}/>
          </div>
      {/* )} */}
    </div>
  );
};

export default Section4;
