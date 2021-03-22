import React from "react";

const CardText = ({ title, subtitle }) => {

  return (
    <>
      <div key={title} className="cardText__container">
        <div className="--title">
          <p className="--title__card">
            {title}
          </p>
        </div>
        <div className="--subtitle">
          <p className="--subtitle__card">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default CardText;
