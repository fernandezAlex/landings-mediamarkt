import React from "react";
import CardText from "./CardText";

const CardTextGrid = ({ data }) => {
  const cardsTexts = data;
  return (
    <div className="cardTextGrid__wrapper">
      <div className="cardTextGrid__container">
        {cardsTexts.map(({ title, subtitle }, i) => {
          return <CardText key={i} title={title} subtitle={subtitle} />;
        })}
      </div>
    </div>
  );
};

export default CardTextGrid;