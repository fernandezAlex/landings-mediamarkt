import React from 'react'
import Card from './Card'

const CardGrid = ({ data }) => {
    const cards = data
    return (
            <div className="grid__wrapper">
                <div className="grid__container">
                    {cards.map(
                        (
                            {
                                imgThumbnail,
                                title,
                                subtitle,
                                slug,
                                button,
                                event,
                                eventCategory,
                                eventAction,
                                eventLabel,
                            },
                            i
                        ) => {
                            return (
                                <div className="card__wrapper">
                                <Card
                                    key={i}
                                    imgThumbnail={imgThumbnail}
                                    title={title}
                                    subtitle={subtitle}
                                    slug={slug}
                                    button={button}
                                    event={event}
                                    eventCategory={eventCategory}
                                    eventAction={eventAction}
                                    eventLabel={eventLabel}
                                />
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
    )
}

export default CardGrid
