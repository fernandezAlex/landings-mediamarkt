import React from "react";

const CardSimpleImg = ({ title, imgThumbnail }) => {

  return (
      <div key={title} className="cardSimpleImg__container">
        <div className="--img" style={{ backgroundImage: `url('${imgThumbnail}')` }}></div>
        <div className="--title">
          <p className="--title__card">
            {title}
          </p>
        </div>
      </div>
  );
};

export default CardSimpleImg;
