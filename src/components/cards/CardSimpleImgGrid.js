import React from "react";
import SectionImg from "../sectionimg/SectionImg";

const CardSimpleImgGrid = ({ data }) => {
  return (
    <div className="cardSimpleImgGrid__wrapper">
      <div className="cardSimpleImgGrid__container">
        {data.map(({ title, content, img, imgPosition  }, i) => {
          return <SectionImg key={i} title={title} img={img} content={content} imgPosition={imgPosition} />;
        })}
      </div>
    </div>
  );
};

export default CardSimpleImgGrid;
