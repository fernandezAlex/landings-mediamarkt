import React from "react";

 const SectionImg = ({title, img, content, imgPosition}) => {
    return (
        <div class={`section__img ${imgPosition} ? "" : "imgRight" }`}>
                <img src={img} alt="MM"/>
            <div class="section__text">
                <h2>
                    {title}
                </h2>
                <p>
                   {content}
                </p>
            </div>
        </div>
    );
};

export default SectionImg;