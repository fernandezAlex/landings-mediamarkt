import React from "react";
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import analytics from '../../helpers/analytics'
import { ReactComponent as Arrow } from '../../img/button-arrow.svg';


 export const SectionImg = ({data},{key}) => {
    const {title, imgThumbnail, content, imgPosition, button, buttonVideo, buttonForm, slug, buttonMM, buttonMMSlug } = data;
    const { isShowing, toggle } = useModal();
    // const test = analytics("gaEvent", "Home_B2B_COMERCIO", "Click", "Home_B2B_COMERCIO_ver_video" );
    return (
        <div id={title}>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <div  className={`section__img ${imgPosition ? "" : "imgRight" }`}>
                <img src={imgThumbnail} alt={title}/>
                <div class="section__text">
                    <p dangerouslySetInnerHTML={{ __html: content }} />
                    <div className="buttons">
                        { button !== "" ?
                            <>
                            {/* <a className="button__more" id={title} onClick={toggle}>{button}</a> */}
                            {/* <a className="button__more" id={title} href="#">{button}</a> */}
                                {/* <Modal isShowing={isShowing} data={data} hide={toggle} /> */}
                            </>
                            :
                            null
                        }
                        {/* <a className="button__more" onClick={toggle}>{buttonVideo}</a> */}
                       
                        <a className="button__more" href={slug}> <span className="arrow"><Arrow /></span>{button}</a>
                    </div>
                </div>
            </div>
            {
                buttonMM ? 
                    <a className="button_mm" href={buttonMMSlug}>{buttonMM}</a>
                :
                null
            }
        </div>   
        // })
    );
};
