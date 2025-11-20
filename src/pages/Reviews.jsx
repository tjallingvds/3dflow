import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/Reviews.css'

function Reviews() {
  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="reviews-page">
        <div className="page-container">
          <h1 className="page-title">Reviews</h1>
          
          <div className="page-content">
            <p className="page-paragraph">
              Reviews komen hier beschikbaar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Reviews

