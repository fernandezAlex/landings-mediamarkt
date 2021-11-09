import React from 'react'
import Card from './Card'

const CardGrid = ({ data }) => {
    const cards = data
    return (
            <div className="">
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
                                    subtitle={<div dangerouslySetInnerHTML={{ __html: subtitle }} />}
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
