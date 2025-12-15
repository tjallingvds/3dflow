import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import OverMij from './pages/OverMij'
import Brainspotting from './pages/Brainspotting'
import Perspectief from './pages/Perspectief'
import Praktisch from './pages/Praktisch'
import Kosten from './pages/Kosten'
import Reviews from './pages/Reviews'
import Actueel from './pages/Actueel'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import AlgemeneVoorwaarden from './pages/AlgemeneVoorwaarden'
import Privacyverklaring from './pages/Privacyverklaring'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-mij" element={<OverMij />} />
          <Route path="/brainspotting" element={<Brainspotting />} />
          <Route path="/perspectief" element={<Perspectief />} />
          <Route path="/praktisch" element={<Praktisch />} />
          <Route path="/kosten" element={<Kosten />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/actueel" element={<Actueel />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaarden />} />
          <Route path="/privacyverklaring" element={<Privacyverklaring />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App

