import React from "react";
import { Card } from './Card'
import data from '../../data/data.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Carousel() {



    

  return (
    <div className="Carousel">
      <Slider 
        dots={true}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {
          data.cards.map((card, i) => {
              return (
                  <Card 
                              id={i}
                              title={card.title}
                              subtitle={card.subtitle}

                  />
              )
          } )
        }
      </Slider>
    </div>
  );
}