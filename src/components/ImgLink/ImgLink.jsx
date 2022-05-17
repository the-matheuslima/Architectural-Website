import React from 'react'
import CarroselText from '../CarroseText/CarroselText'
import images from '../../constants'

function ImgLink({img, text}) {
    console.log(text)
  return (
    <div>
        <CarroselText img={img} />
    
        <a className='app__link' href="#">{text} <img src={images.arrowRight} alt="arrow right" /></a>
    </div>
  )
}

export default ImgLink