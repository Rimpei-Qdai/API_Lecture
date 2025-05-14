import React from 'react'
import GenshinSlider from './components/GenshinSlider'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Character = () => {
  return (
    <>
    <h1 className='Title'>Characters</h1>
    <div className='Sub-title'>キャラクター</div>
    {/* <API /> */}
    <GenshinSlider />
    
    <Link to="/detail">

    </Link>


    <Link to={"/yahaha"}>
    <a className="btn cubic">
          <span className="default">More detail</span>
          <span className="hovering">Now, hovering.</span>
      </a>
    </Link>
    </>
  )
}

export default Character