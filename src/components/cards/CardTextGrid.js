import React from 'react'
import CardText from './CardText';
import { cardsTexts } from '../../data/cardsText';


const CardTextGrid = () => {

    return (
        <>
            <div className="cardTextGrid__wrapper">
                <div className="cardTextGrid__container">
                    {
                        cardsTexts.map((card, i) => {
                            return (
                                <CardText
                                    key={i}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default CardTextGrid