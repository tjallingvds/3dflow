import React from 'react'
import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            De fundamentele èn snelste weg zowel voor prestatieverbetering als voor alles wat je belemmert, is verwerking.
          </h1>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <img src="/IMG_6840.jpeg" alt="Connection and growth" className="hero-image" />
          </div>
          <div className="clay-accent-box"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero

