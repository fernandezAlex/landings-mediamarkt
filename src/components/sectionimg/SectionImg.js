import React from "react";

 export const SectionImg = ({data}) => {
    const {title, img, content, imgPosition} = data;
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
