import React from "react";
import SectionImg from "../sectionimg/SectionImg";

const CardSimpleImgGrid = ({ data }) => {
  return (
    <div className="cardSimpleImgGrid__wrapper">
      <div className="cardSimpleImgGrid__container">
        {data.map((data, i) => {
          return <SectionImg key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default CardSimpleImgGrid;
