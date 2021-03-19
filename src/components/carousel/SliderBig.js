import React from "react";
import CardWide from "../cards/CardWide";
import data from "../../data/data.json";
import Slider from "react-slick";



const SliderBig = () => {
  const { cards } = data;

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

export default SliderBig;
