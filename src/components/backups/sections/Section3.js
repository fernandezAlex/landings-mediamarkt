import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import CardSection from "../cards/CardSection";
import debounce from "../../helpers/debounce";



const Section3 = () => {
  
  const [width, setWidth] = useState(document.body.clientWidth);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      const width = document.body.clientWidth;
      setWidth(width);
    }, 500)
    window.addEventListener('resize', debouncedHandleResize)
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })


    const cardSection = {
      title: "Soluciones financieras",
      subtitle: "Todas la soluciones financieras a medida adaptadas a tus necesidades",
      link: "https://specials.mediamarkt.es/empresas/soluciones",
      imgThumbnail: "https://pre-specials.mediamarkt.es/sites/default/files/landing/node-1264/static/media/062007_450x360_Teaser_2_AAFF.png"
    }
  

  return (
    <div className="section">
      <h1 className="title">Servicios B2B</h1>
      <div className="card__section__wrapper">
      {
                  width < 550 
                  ? <Card title={cardSection.title} subtitle={cardSection.subtitle} slug={cardSection.link} imgThumbnail={cardSection.imgThumbnail}/>
                  : <CardSection title={cardSection.title} subtitle={cardSection.subtitle} slug={cardSection.link} imgThumbnail={cardSection.imgThumbnail}/>
      }
    </div>
    </div>
  );
}

export default Section3