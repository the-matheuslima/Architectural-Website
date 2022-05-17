import React, { useState } from 'react'
import CarroselText from '../../components/CarroseText/CarroselText'
import images from '../../constants'
import './Project.scss'

function Projects() {
  return (
    <section className='app__projects-container'>
        <ul className='app__projects-slides'>
          <li className='app__projects-slides-img'>
            <img src={images.photo1} alt="photo1" />
          </li>

          <li className='app__projects-slides-img'>
            <img src={images.photo2} alt="photo2" />
          </li>

          <li className='app__projects-slides-img'>
            <img src={images.photo3} alt="photo3" />
          </li>
        </ul>

      <CarroselText img={images.carroselText2} />

      <a className='app__link' href="#">discover our projects <img src={images.arrowRight} alt="" /></a>
    </section>
  )
}

export default Projects