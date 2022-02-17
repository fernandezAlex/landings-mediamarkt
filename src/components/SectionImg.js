import React from "react";
import Modal from './modal/Modal';
import useModal from '../hooks/useModal';
import analytics from '../helpers/analytics'

const SectionImg = ({ data, width }) => {
    const { isShowing, toggle } = useModal();
    return (
        <div className="section__">
            {data.sectionTitle && <h2>{data.sectionTitle}</h2>}
            {
                data.sectionData.map(({ title, imgThumbnail, content, imgPosition, button, buttonLink, modal, richText }, i) => {
                    return <>
                        <div key={i} className={`section__img ${imgPosition ? "" : "imgRight"}`}>
                            <img className={!content && "fullImage" } src={imgThumbnail} alt={title} />
                            <div className="section__text">
                                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                                <p dangerouslySetInnerHTML={{ __html: content }} />
                                {button !== "" && button !== undefined ?
                                   <>
                                   { modal !== "" && modal !== undefined ?  
                                        <>
                                            <a className="button__more" id={title} onClick={toggle}>{button}</a>
                                            <Modal isShowing={isShowing} data={data} hide={toggle} />
                                        </>
                                        :
                                        <a className="button__more" id={title} href={buttonLink}>{button}</a>
                                    }
                                    </>
                                    :
                                    null
                                }
                            </div>
                        </div>
                        {richText && <small>{richText}</small>}
                    </>
                })
            }
        </div>
    );
};

export default SectionImg;