import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Arrow} from '../../img/button-arrow.svg';

export const CardButton = (slug) => {
    return (
        <Link to ={slug}>
            <div className="--button">
                <a className="link__card" target="__loquesea" href="__loquesea">
                    <span><Arrow/></span>
                    <font className="link__text"> Ver más</font>                                
                </a>
            </div>
        </Link>
    )
}