import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OverMij from './pages/OverMij'
import Brainspotting from './pages/Brainspotting'
import HoeWerktHet from './pages/HoeWerktHet'
import Praktisch from './pages/Praktisch'
import Kosten from './pages/Kosten'
import Reviews from './pages/Reviews'
import Actueel from './pages/Actueel'
import Blogs from './pages/Blogs'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over-mij" element={<OverMij />} />
        <Route path="/brainspotting" element={<Brainspotting />} />
        <Route path="/hoe-werkt-het" element={<HoeWerktHet />} />
        <Route path="/praktisch" element={<Praktisch />} />
        <Route path="/kosten" element={<Kosten />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/actueel" element={<Actueel />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </Router>
  )
}

export default App

