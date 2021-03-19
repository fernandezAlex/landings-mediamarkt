import React from 'react'
import Card from './Card'
import cards from '../../data/cardsSection2';

const CardGrid = () => {

    return (
        <React.Fragment>
            <div className="grid__wrapper">
                <div className="grid__container">
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
                </div>
            </div>
        </React.Fragment>
    )
}

export default CardGrid