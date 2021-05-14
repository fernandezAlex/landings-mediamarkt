import React from "react";
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import analytics from '../../helpers/analytics'

 export const SectionImg = ({data}) => {
    const {title, imgThumbnail, content, imgPosition, button} = data;
    const { isShowing, toggle } = useModal();
    // const test = analytics("gaEvent", "Home_B2B_COMERCIO", "Click", "Home_B2B_COMERCIO_ver_video" );

    return (
        data.map(({ title, imgThumbnail, content, imgPosition, button }, i) => {
            return <div id={`option-${i+1}`} className={`section__img ${imgPosition ? "" : "imgRight" }`}>
                    <img src={imgThumbnail} alt={title}/>
                    <div class="section__text">
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        <p dangerouslySetInnerHTML={{ __html: content }} />
                        { button !== "" ?
                            <>
                            <a className="button__more" id={title} onClick={toggle}>{button}</a>
                                <Modal isShowing={isShowing} data={title} hide={toggle} />
                            </>
                            :
                            null
                        }
                    </div>
            </div>
        })
    );
};
