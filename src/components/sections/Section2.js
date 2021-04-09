import React from 'react'
import CardTextGrid from '../cards/CardTextGrid'

const Section2 = ({data}) => {
    return (
        <div className="section">
        <div>
          <h1 className="title">La transformación digital en los puntos de venta</h1>
        </div>
        <CardTextGrid data={data}/>
        </div>
    )
}

export default Section2