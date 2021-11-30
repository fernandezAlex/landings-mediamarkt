import React from 'react'
import { isTemplateElement } from '@babel/types';

export const FullImage = ( {width, data} ) => {
    console.log(width)
    return (
        <div className="section__intro">
            {
                data.map((item, key) =>
                    <img key={key} src={item.img} alt={item.alt} className="img-responsive"/>            
                )
            }
        </div>
    )
}
