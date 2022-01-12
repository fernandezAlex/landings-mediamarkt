import React from 'react'
import CardGrid from '../cards/CardGrid'
import SliderSmall from '../carousel/SliderSmall'

const Section4 = ({ width, data }) => {
    return (
        <div className="section section-colorized">
            {width < 824 ? (
                <div>
                    <SliderSmall data={data} />
                </div>
            ) : (
                <div>
                    <CardGrid data={data} />
                </div>
            )}
        </div>
    )
}

export default Section4
