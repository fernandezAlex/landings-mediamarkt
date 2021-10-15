import React from 'react'
import CardInfo from "../cards/CardInfo";

const Section2 = ({data}) => {
  const {title} = data
    return (
      <div className="section">
      <h2 style={{padding:'30px 80px 0px'}}>Preguntanos por la solución que mejor encaje a tu negocio</h2>
      <div className="gridCardInfo__container">
        {data.map(({ title, subtitle, imgThumbnail }, i) => {
          return <CardInfo key={i} imgThumbnail={imgThumbnail} title={title} subtitle={subtitle} />;
        })}
      </div>
    </div>
  );
}

export default Section2