import React from 'react'
import Card from './Card'

const CardGrid = ({ data }) => {
    const cards = data
    return (
            <div>
                <div className="grid__container">
                    {cards.map(
                        (
                            {
                                imgThumbnail,
                                title,
                                subtitle,
                                slug,
                                button,
                                eventGa,
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
                                    eventGa={eventGa}
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
