import './App.css'
import API from './components/API'
import GenshinSlider from './components/GenshinSlider'
import './button.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Character from './Character'
import Yahaha from './components/Yahaha'
import Loader from './Loader'
import { useEffect, useState } from 'react'
import Header from './Header'

function App() {

  const [ idLoaded, setIsLoaded ] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      console.log('loaded')
      setIsLoaded(true)
    }, 2000)
  }, [ ])

  return (
    <>

    { idLoaded ? (<>
      <Header />
      <div className="content">
      <Routes>
      <Route path="/detail" element={<Home />} />
      <Route path="/yahaha" element={<Yahaha />} />
      <Route path="/" element={<Character />}/>
    </Routes>

      </div>
     </>
      
    ) :(<>
      <Loader />
    </>
    )}


    </>
  )
}

export default App
