import React from 'react'
import SliderBig from '../carousel/SliderBig'
import SliderSmall from '../carousel/SliderSmall'

const Section4 = ({ width, data }) => {
    return (
        <div className="section">
            <h1 className="title">Servicios B2B</h1>
            {width < 824 ? (
                <SliderSmall data={data} />
            ) : (
                <SliderBig data={data} />
            )}
        </div>
    )
}

export default Section4
