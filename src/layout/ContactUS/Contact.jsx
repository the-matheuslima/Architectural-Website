import React from 'react'
import images from '../../constants'
import './Contact.scss'

function Contact() {
  return (
    <section className='app__contactUs app__container'>
      <div className='app__contactUs-info'>
        <h3 style={{ fontSize: '1.6rem' }}>contact us</h3>
        <p>If you are interested in our work and want to hire a project, contact us and ask for a price.</p>
      </div>


      <div className='app__contactUs-detail'>
        <form className='app__contactUs-form'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='you@email.com' />
          <input type="tel" placeholder='+1 408 123 4567' />
          <input type="text" placeholder='Message' />
        </form>

        <div className='app__contactUs-form-ex'>
          <div>
            <h4 className='app__contactUs-form-ex-dynamically'>Our E-mail</h4>
            <span style={{ color: '#E5E5E5' }}>contact@architectural.com</span>
          </div>

          <div>
            <h4 className='app__contactUs-form-ex-dynamically'>Our Phone</h4>
            <span style={{ color: '#E5E5E5' }}>+1 408 568 4657</span>
          </div>
        </div>
      </div>

      <div style={{margin: '1rem 0'}}>
        <a className='app__link' style={{justifyContent: 'flex-start'}}  href="#">send <img src={images.sendBlack} alt="arrow right" /></a>
      </div>
    </section>
  )
}

export default Contact