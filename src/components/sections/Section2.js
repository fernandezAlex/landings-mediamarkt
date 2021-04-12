import React from 'react'
import { SectionImg } from '../sectionimg/SectionImg'

const Section2 = ({data}) => {
  const {title} = data
    return (
        <div className="section">
        <div>
          <h1 className="title">{title}</h1>
        </div>
        <SectionImg data={data}/>
        </div>
    )
}

export default Section2