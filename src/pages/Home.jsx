import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import MainContent from '../components/MainContent'
import AboutMe from '../components/AboutMe'
import ForWhom from '../components/ForWhom'
import Quote from '../components/Quote'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="app">
      <Navigation />
      <Banner />
      <Hero />
      <MainContent />
      <Philosophy />
      <AboutMe />
      <ForWhom />
      <Quote />
      <Footer />
    </div>
  )
}

export default Home

