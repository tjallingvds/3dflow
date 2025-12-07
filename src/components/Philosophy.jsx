import React from 'react'
import '../styles/Philosophy.css'

function Philosophy() {
  return (
    <section className="philosophy">
      <div className="philosophy-container">
        <div className="divider-line" style={{ height: '80px' }}></div>
        
        <div className="philosophy-quote">
          <p className="quote-italic">Leven is groeien,</p>
        </div>

        <div className="divider-line" style={{ height: '80px' }}></div>

        <div className="philosophy-statement">
          <h2 className="statement-text">
            iedere stagnatie een afdruk van onverwerkte pijn.
          </h2>
        </div>

        <div className="divider-line" style={{ height: '80px' }}></div>

        <div className="philosophy-welcome">
          <h2 className="welcome-text">Je bent welkom!</h2>
        </div>

        <div className="divider-line" style={{ height: '80px' }}></div>
      </div>
    </section>
  )
}

export default Philosophy

