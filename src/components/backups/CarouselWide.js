import React from "react";
import { CardWide } from "../cards/CardWide";

import data from "../../data/data.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function CarouselWide() {
  return (
    <div className="CarouselWide">
      <Slider dots={true} autoplay={true} autoplaySpeed={3000}>
        {data.cards.map((card, i) => {
          return (
            <CardWide id={i} title={card.title} subtitle={card.subtitle} />
          );
        })}
      </Slider>
    </div>
  );
}
