import React from 'react'
import CardText from './CardText';
import {cardsTexts} from '../../data/cardsText';


const CardTextGrid = () => {




    
    return (
        <React.Fragment>
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
                        } )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardTextGrid