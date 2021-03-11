import React, { useEffect, useState} from 'react';
import Slider from "react-slick";
import data from '../../data/data.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from '../cards/Card';




export const SliderReact = () => {

    const [card, setCard] = useState([]);
    const {cards} = data;
    console.log(cards);

    // useEffect(() => {
    //     setCard(cards);
    // }, [])

    let settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        centerMode: true,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        // appendDots: dots => <ul>{dots}</ul>,
        // customPaging: i => (
        //     <div className="ft-slick__dots--custom">
        //     <div className="loading" />
        //     </div>
        // ),
    
        responsive: [
          {
            breakpoint: 1290,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 512,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };


    return (
        <div className="container__slider">
                <div className="slider__card">
            <Slider  {...settings}>
                        {
                            cards.map((card, i) => {
                                return (
                                        <Card 
                                                key={i}
                                                imgThumbnail={card.imgThumbnail}
                                                title={card.title}
                                                subtitle={card.subtitle}

                                        />
                                )
                            } )
                        }
            </Slider>
                </div>
        </div>
    );
}
