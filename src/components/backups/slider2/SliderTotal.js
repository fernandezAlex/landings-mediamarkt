import React from 'react'
import data from '../../data/data.json';
import { Slider } from './Slider';


export const SliderTotal = () => {


    return (
        <Slider cards={data.cards}/>
    )
}
