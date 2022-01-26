import React from 'react'

export const TextSection = ({data}) => {
    const {content} = data;
    return (
        <div className="section__">
            <div className="text__section">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
        </div>
    )
}
