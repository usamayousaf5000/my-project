import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import MobilePage from './MobilePage'
import SeeAll from './SeeAll'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/mobileandaccesories" element={<MobilePage/>}/>
          <Route path='/Seeall' element={<SeeAll/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
