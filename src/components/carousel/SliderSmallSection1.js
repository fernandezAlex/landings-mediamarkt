import React from 'react';
import Slider from "react-slick";
import Card from '../cards/Card';
import { cardsSection1 } from '../../data/cards'

const data = cardsSection1


const SliderSmallSection1 = () => {

    const cards = data

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        variableWidth: true,
        draggable: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };


    return (

        <div className="container__slidersmall">
            <div className="slidersmall__card">
                <Slider  {...settings}>
                    {
                        cards.map((card, i) => {
                            return (
                                <Card
                                    key={i}
                                    imgThumbnail={card.imgThumbnail}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                    slug={card.slug}
                                    button={card.button}
                                    eventGa={card.eventGa}
                                    eventCategory={card.eventCategory}
                                    eventAction={card.eventAction}
                                    eventLabel={card.eventLabel}
                                />
                            )
                        })
                    }
                </Slider>
            </div>
        </div>

    );
}

export default SliderSmallSection1
