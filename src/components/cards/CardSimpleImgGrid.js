import React from "react";
import CardSimpleImg from "./CardSimpleImg";

const CardSimpleImgGrid = ({ data }) => {
  return (
    <div className="cardSimpleImgGrid__wrapper">
      <div className="cardSimpleImgGrid__container">
        {data.map(({ title, imgThumbnail }, i) => {
          return <CardSimpleImg key={i} title={title} imgThumbnail={imgThumbnail} />;
        })}
      </div>
    </div>
  );
};

export default CardSimpleImgGrid;
