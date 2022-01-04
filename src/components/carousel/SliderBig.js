import React from 'react'
import CardWide from '../cards/CardWide'
import Slider from 'react-slick'

const SliderBig = ({ data }) => {
    const cards = data

    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        centerMode: true,
        draggable: true,
        arrows: true,
        slidesToShow: 1,
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
                                eventGa,
                                eventCategory,
                                eventAction,
                                eventLabel,
                            },
                            i
                        ) => {
                            return (
                                <CardWide
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
                            )
                        }
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default SliderBig
