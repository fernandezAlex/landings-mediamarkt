import React from "react";

 const SectionImg = ({title, img, content, imgPosition}) => {
    return (
        <div class={`section__img ${imgPosition ? "" : "imgRight" }`}>
                <img src={img} alt="MM"/>
            <div class="section__text">
                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                <p dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    );
};

export default SectionImg;