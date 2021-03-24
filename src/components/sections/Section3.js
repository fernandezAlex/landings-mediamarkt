import React from 'react'
import CardGrid from '../cards/CardGrid'
import SliderSmall from '../carousel/SliderSmall'

const Section3 = ({ width, data }) => {
    return (
        <div className="section">
            {width < 824 ? (
                <div>
                    <h1 className="title">Nuestras soluciones adaptadas</h1>
                    <SliderSmall data={data} />
                </div>
            ) : (
                <div>
                    <h1 className="title">
                        Nuestras soluciones adaptadas a cada sector
                    </h1>
                    <CardGrid data={data} />
                </div>
            )}
        </div>
    )
}

export default Section3
