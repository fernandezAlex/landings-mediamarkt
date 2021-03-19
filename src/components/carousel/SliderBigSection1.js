import React from "react";
import Slider from "react-slick";
import CardWide from "../cards/CardWide";
import { cardsSection1 } from '../../data/cards'

const data = cardsSection1

const SliderBigSection1 = () => {

  const cards = data

  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    centerMode: true,
    draggable: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };


  return (
    <div className="container__sliderbig">
      <div className="sliderbig__card">
        <Slider {...settings}>
          {cards.map((card, i) => {
            return (
              <CardWide
                key={i}
                imgThumbnail={card.imgThumbnail}
                title={card.title}
                subtitle={card.subtitle}
                slug={card.slug}
                button={card.button}
                event={card.event}
                eventCategory={card.eventCategory}
                eventAction={card.eventAction}
                eventLabel={card.eventLabel}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderBigSection1;
