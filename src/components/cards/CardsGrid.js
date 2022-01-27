import React from 'react'
import Card from './Card'
import SliderSmall from '../carousel/SliderSmall'

const CardsGrid = ({ width, data }) => {
    const {bgColorSection,sectionTitle,cardsData} = data;
    return (
        <>
            <div className={bgColorSection && `section__colorized--${bgColorSection}`}>
                <div className="section__">
                    {data.sectionTitle &&
                        <h2>
                            {sectionTitle}
                        </h2>
                    }
                    {width < 1200 ? (
                        <div>
                            <SliderSmall data={cardsData} />
                        </div>
                    ) : (
                    <div className="grid__container">
                        {
                            data.cardsData.map(
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
                                    },i
                                ) => {
                                    return (
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
                                    )
                                }
                            )
                        }
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CardsGrid
