import React from 'react'
import './Description.scss'

const Description = ({description}) => {
  return (
    <div className='introTexto'>
        <h2>{description.title}</h2>
        <p>{description.paragraph1}</p>
        <p>{description.paragraph2}</p>
        <p>{description.paragraph3}</p>
    </div>
  )
}

export default Description