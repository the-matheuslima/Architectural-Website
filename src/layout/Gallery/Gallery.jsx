import React from 'react'
import './Gallery.scss'
import images from '../../constants'
import ImgLink from '../../components/ImgLink/ImgLink'

function Gallery() {
  return (
    <section className='app__gallery'>
       <ImgLink img={images.gallery} text={' see our gallery'}/>
    </section>
  )
}

export default Gallery