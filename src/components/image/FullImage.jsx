import React, {useState} from 'react'
import { isTemplateElement } from '@babel/types';

export const FullImage = ( {width, data} ) => {
    return (
        <div className="section__intro">
            {
                data.map((item, key) => {
                    const {img:{desktop, tablet, mobile}} = item;
                    return <img key={key} src={width<400 ? mobile : width>700 ? desktop : tablet } alt={item.alt} className="img-responsive"/>
                })
            }
        </div>
    )
}
