import React from 'react'
import CardGrid from '../cards/CardGrid'
import SliderSmall from '../carousel/SliderSmall'

const Section4 = ({ width, data }) => {
    return (
        <>
            <div className="section--colorized">
                <div className="section__">
                    <h2>
                        MODALIDADES DE ALQUILER
                    </h2>
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
            </div>
            <div className="section__">
            <p>*Precios sin impuestos incluidos</p>
            <h3>También puedes solicitar tu presupuesto personalizado hecho a medida. Consúltanos en nuestro formulario:</h3>
            </div> 
        </>     
    )
}

export default Section4
