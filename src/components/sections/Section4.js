import React from 'react'
import Card from '../cards/Card'
import CardSection from '../cards/CardSection'

const Section4 = (width) => {

    const cardSection = {
        title: "Soluciones financieras",
        subtitle: "Todas la soluciones financieras a medida adaptadas a tus necesidades",
        link: "https://specials.mediamarkt.es/empresas/soluciones-financieras",
        imgThumbnail: "https://specials.mediamarkt.es/assets-react/b2b/062007_450x360_Teaser_1_AAFF.png",
        button: "Ver más",
        eventGa: 'gaEvent',
        eventCategory: 'Home_B2B',
        eventAction: 'Click',
        eventLabel: 'Home_B2B_soluciones_B2B'
      };


    return (
        <div className="section">
        <h1 className="title">Servicios B2B</h1>
        <div className="card__section__wrapper">
          {width.width < 550 ? (
            <Card
              title={cardSection.title}
              subtitle={cardSection.subtitle}
              slug={cardSection.link}
              imgThumbnail={cardSection.imgThumbnail}
              button={cardSection.button}
              eventGa={cardSection.eventGa}
              eventCategory={cardSection.eventCategory}
              eventAction={cardSection.eventAction}
              eventLabel={cardSection.eventLabel}
            />
          ) : (
            <CardSection
              title={cardSection.title}
              subtitle={cardSection.subtitle}
              slug={cardSection.link}
              imgThumbnail={cardSection.imgThumbnail}
              button={cardSection.button}
              eventGa={cardSection.eventGa}
              eventCategory={cardSection.eventCategory}
              eventAction={cardSection.eventAction}
              eventLabel={cardSection.eventLabel}
            />
          )}
        </div>
      </div>
    )
}


export default Section4