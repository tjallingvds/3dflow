import React from 'react'
import '../styles/Quote.css'

function Quote() {
  return (
    <section className="quote-section">
      <div className="quote-container">
        <div className="divider-line" style={{ height: '60px' }}></div>
        
        <blockquote className="main-quote">
          <p className="quote-text">
            We never really encounter the world,<br />
            all we experience is our own nervous system.
          </p>
        </blockquote>

        <div className="divider-line" style={{ height: '60px' }}></div>
      </div>
    </section>
  )
}

export default Quote

