import React from 'react'
import images from '../../constants'
import './Clients.scss'

function Clients() {
  return (
    <section className='app__clients app__container'>
        <div className='app__clients-img'>
            <img src={images.clientsImg} alt="" />
        </div>

        <div className='app__clients-feedback'>
            <h2 className='h2__montserrat'>“splendid work, impeccable.”</h2>
        </div>

        <div className='app__clients-info'>
            <p className='app__clients-info-name p__Syncopate'>Mary Toronto</p>
            <p className='app__clients-info-work'>architect & designer, NY</p>
        </div>

        <a className='app__link' href="#">what our customers say <img src={images.arrowRight} alt="arrow right" /></a>
    </section>
  )
}

export default Clients