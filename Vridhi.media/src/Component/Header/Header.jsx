import React from 'react'
import './Header.css'

function Header() {
  return (
      <>
          <div className='Headermain'>
              <nav>
                  <div className='img_wrapper'>
                      <img src="https://static.wixstatic.com/media/22791e_043cdd660d5f451a80750e04f8da012e~mv2.png/v1/fill/w_368,h_123,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-19%20234401.png" alt="logo" className='logo' />
                  </div>
                  <div className='link_wrapper'>
                      <a href="">Newsletter</a>
                      <a href="">Services</a>
                      <a href="">Contact</a>
                      <a href="">Book a Session</a>
                      
                  </div>
              </nav>
          </div>
      </>
  )
}

export default Header