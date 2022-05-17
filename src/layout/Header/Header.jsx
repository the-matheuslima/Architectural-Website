import React from 'react'
import CarroselText from '../../components/CarroseText/CarroselText'
import images from '../../constants/index'
import './Header.scss'

function Header() {
  return (
    <header className='app_header-container'>
      <CarroselText img={images.magic} />
      <div className='app__wrapper-grid-img app__container'>
          <img src={images.gridImg} alt="" />
      </div>
    </header>
  )
}

export default Header