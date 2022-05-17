import React, { useState } from 'react'
import images from '../../constants/index'
import './Navbar.scss'

function Navbar() {

    const [navbar, setNavbar] = useState(false)

    function handleMenu() {
        if(window.screen.width < 1006) {
            setNavbar(false)
        }
        console.log('oa', navbar)

        setNavbar((navbar) => !navbar)
    }

  return (
    <nav className='app__nav app__container'>
        <div className='app__nav-mobile '>
            <div className='app__nav-item_img'>
                <img src={images.logo} alt="" />
            </div>
            <button 
            type='button' 
            onClick={handleMenu}
            className={navbar ? 'menu-active': 'menu'}
            >
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </button>

        </div>
        <ul className= {navbar ? 'app__nav-items_active' : 'app__nav-items'}>
            <div className='app__nav-item'>
                <li>home</li>
                <li>projects</li>
                <li>clients</li>
                <li>gallery</li>
            </div>

            <div className='app__nav-item_img'>
                <img src={images.logo} alt="" />
            </div>

            <div className='app__nav-item'>
                <li>about us</li>
                <li>contact</li>
                <li>Dark mode</li>
                <li><img src={images.settings} alt="" /></li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar