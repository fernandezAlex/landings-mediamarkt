import React from 'react'
import loader from './loader.gif';

export const Loader = () => {
    return (
        <div className="loader__container">
            <div className="icon__container">
                <img src={loader} alt="loader-mediamarkt"/>
            </div>
        </div>
    )
}
