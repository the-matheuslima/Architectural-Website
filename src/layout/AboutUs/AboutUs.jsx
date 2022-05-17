import React from 'react'
import ImgLink from '../../components/ImgLink/ImgLink'
import images from '../../constants'
import './AboutUs.scss'

function AboutUs() {
  return (
    <section className='app__aboutUs'>
        <ImgLink img={images.carroselText3} text={'About Us'}/>
    </section>
  )
}
// <CarroselText img={images.carroselText3} />

export default AboutUs