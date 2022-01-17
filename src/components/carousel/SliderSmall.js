import React from 'react'
import Card from '../cards/Card'
import Slider from 'react-slick'

const SliderSmall = ({ data }) => {
    const cards = data
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
    }
    console.log(cards)
    return (
        <div className="container__slidersmall">
            <div className="slidersmall__card">
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

export default SliderSmall

