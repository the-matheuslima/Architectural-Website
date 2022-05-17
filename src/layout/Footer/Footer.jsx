import React from 'react'
import images from '../../constants'
import './Footer.scss'

function Footer() {
  return (
    <footer className='app__footer'>
        <ul className='app__footer-items app__container'>
            <div className='app__footer-item'> 
                <img src={images.logo} alt="" />
            </div>

            <div className='app__footer-item'>
                <li>home</li>
                <li>Projects</li>
                <li>clients</li>
                <li>gallery</li>
                <li>about us</li>
                <li>contact</li>
            </div>

            <div className='app__footer-item'>
                <li><img src={images.dribbbleLine} alt="dribbble" /></li>
                <li><img src={images.facebook} alt="dribbble" /></li>
                <li><img src={images.instagram} alt="dribbble" /></li>
                <li><img src={images.twitter} alt="dribbble" /></li>
            </div>
        </ul>

        <div className='architectural'>
            <p>Architectural © 2021</p>
        </div>
    </footer>
  )
}

export default Footer