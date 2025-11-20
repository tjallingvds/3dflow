import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/Blogs.css'

function Blogs() {
  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="blogs-page">
        <div className="page-container">
          <h1 className="page-title">Blogs</h1>
          
          <div className="page-content">
            <p className="page-paragraph">
              Blog posts komen hier beschikbaar.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blogs

