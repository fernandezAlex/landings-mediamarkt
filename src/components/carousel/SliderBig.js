import React from 'react'
import Card from '../cards/Card'
import Slider from 'react-slick'

const SliderBig = ({ data }) => {
    const cards = data

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: false,
        draggable: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
    }

    return (
        <div className="container__sliderbig">
            <div className="sliderbig__card">
                <Slider {...settings}>
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
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default SliderBig
