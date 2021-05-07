import React from 'react'
import Card from '../cards/Card'
import CardSection from '../cards/CardSection'


const Section4 = ({ width, data }) => {
    return (
        <div className="section">
            <h1 className="title">Escoge la solución que mejor se adapte a tu empresa o negocio</h1>
            {width > 600 ? 
            <CardSection data={data}/> :
            <div className="card__section__wrapper">
                <Card data={data}/>
            </div>
            }
        </div>
    )
}

export default Section4
