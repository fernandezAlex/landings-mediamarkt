import React from "react";

export const SectionImg = ({data}) => {
    const {img, title, body} = data
    return (
        <div className="container__section__img">

            <div class="section__text">
                <p>{body}</p>
            </div>
            <div className="section__img">
                <img src={img} alt={title}/>
            </div>

        </div>
    );
};


