import React from "react";
import Modal from './modal/Modal';
import useModal from '../hooks/useModal';
import analytics from '../helpers/analytics'

const SectionImg = ({ data, width }) => {
    // const {title, imgThumbnail, content, imgPosition, button} = data;
    const { isShowing, toggle } = useModal();
    return (
        <div className="section__">
            {
                data.map(({ title, imgThumbnail, content, imgPosition, button }, i) => {
                    return <>
                        <div id={title} className={`section__img ${imgPosition ? "" : "imgRight"}`}>
                            <img src={imgThumbnail} alt={title} />
                            <div className="section__text">
                                <h2 dangerouslySetInnerHTML={{ __html: title }} />
                                <p dangerouslySetInnerHTML={{ __html: content }} />
                                {button !== "" && undefined ?
                                    <>
                                        <a className="button__more" id={title} onClick={toggle}>{button}</a>
                                        <Modal isShowing={isShowing} data={data} hide={toggle} />
                                    </>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </>

                })
            }
        </div>
    );
};

export default SectionImg;