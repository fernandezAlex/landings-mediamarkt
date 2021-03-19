import React from 'react';
import Slider from "react-slick";
import Card from '../cards/Card';
import cards from '../../data/cardsSection2';

const SliderSmall = () => {

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
                                    event={card.event}
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

export default SliderSmall
