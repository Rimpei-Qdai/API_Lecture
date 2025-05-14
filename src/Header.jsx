import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <img src="src/assets/img/Logo.png" alt="" className='header-logo' />

      {/* <div className="humberger">
        <span className="bar"></span><span className="bar"></span><span className="bar"></span>
      </div> */}

      <div className="hamburger" onClick={ (el) =>{
        el.target.classList.toggle("open")
        console.log(el.target.classList)
      } } >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Header