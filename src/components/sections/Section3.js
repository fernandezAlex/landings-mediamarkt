import React from "react";
import CardInfo from "../cards/CardInfo";

const Section3 = ({ data }) => {
  return (
    <div className="section">
      <div className="gridCardInfo__container">
        {data.map(({ title, imgThumbnail }, i) => {
          return <CardInfo key={i} imgThumbnail={imgThumbnail} title={title} />;
        })}
      </div>
    </div>
  );
};

export default Section3;
