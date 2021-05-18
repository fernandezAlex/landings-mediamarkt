import React from "react";
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import analytics from '../../helpers/analytics'

 export const SectionImg = ({data},{key}) => {
    const {title, imgThumbnail, content, imgPosition, button} = data;
    const { isShowing, toggle } = useModal();
    // const test = analytics("gaEvent", "Home_B2B_COMERCIO", "Click", "Home_B2B_COMERCIO_ver_video" );
console.log(key);
console.log(data);

    return (
        // data.map(({ title, imgThumbnail, content, imgPosition, button }, i) => {
             <div id={title} className={`section__img ${imgPosition ? "" : "imgRight" }`}>
                    <img src={imgThumbnail} alt={title}/>
                    <div class="section__text">
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                        { button !== "" ?
                            <>
                            <a className="button__more" id={title} onClick={toggle}>{button}</a>
                                <Modal isShowing={isShowing} data={data} hide={toggle} />
                            </>
                            :
                            null
                        }
                    </div>
            </div>
        // })
    );
};
