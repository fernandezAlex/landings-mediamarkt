import React, { useEffect, useState } from 'react';
import data from '../../data/data.json';
import {Card} from '../cards/Card';



export const Slider = ({cards}) => {

    const [currentSlide, setCurrentSlide] = useState(0);


    const goToNext = () => {
        const {length} = cards
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    }

    useEffect(() => {
        setTimeout(goToNext, 2000)
    })

    if (!Array.isArray(cards) ||cards.length <= 0) {
        return null;
    }


    console.log(currentSlide);



    return (
        <section className="slider">
            {
                        data.cards.map((card, i) => {
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
        </section>
    )
}
