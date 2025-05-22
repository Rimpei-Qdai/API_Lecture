import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <img src="src/assets/img/Logo.png" alt="" className='header-logo' />
      <div className="hamburger" onClick={ (el) =>{
        el.target.classList.toggle("open")
        console.log(el.target.classList)
        const menuDOM = document.querySelector('.menu-list')
        menuDOM.classList.toggle('open')
        const headerDOM = document.querySelector('.header')
        headerDOM.classList.toggle('open')
      } } >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="menu-list">
        <li className="menu-item">
          <a href="/">HOME</a>
        </li>
        <li className="menu-item">
          <a href="/yahaha">Yahaha</a>
        </li>
      </ul>
    </div>
  )
}

export default Header