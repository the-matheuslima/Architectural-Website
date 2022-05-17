import React from 'react'
import './CarroselText.scss'

function CarroselText({img}) {
  return (
    <div className='app__carrosel-text'>
        <img src={img} alt="" />
      </div>
  )
}

export default CarroselText