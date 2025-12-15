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
          
          <div className="blogs-content">
            <p className="linkedin-intro">
              Met enige regelmaat post ik ook iets op{' '}
              <a 
                href="https://www.linkedin.com/in/irenevanderschaar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin-link"
              >
                LinkedIn
              </a>
              ; voel je vrij om me daar te volgen of connecten.
            </p>

            <article className="blog-post">
              <h2 className="blog-title">
                Hoogbegaafdheid en uitzonderlijk hoogbegaafdheid in het verbindende perspectief van universele menselijke basisbehoeften en neurodiversiteit
              </h2>
              <p className="blog-meta">Op persoonlijke titel, juni 2025</p>
              <a 
                href="https://stichtinghoogbegaafd.nl/2025/06/hoogbegaafdheid-en-uitzonderlijke-hoogbegaafdheid-in-het-verbindende-perspectief-van-universele-menselijke-basisbehoeften-en-neurodiversiteit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="blog-link"
              >
                Lees meer →
              </a>
            </article>

            <article className="blog-post">
              <h2 className="blog-title">
                (School)trauma bij Hoogbegaafdheid: Ontdek waarom EMDR niet altijd werkt en welke therapie wél helpt
              </h2>
              <p className="blog-meta">Maart 2025</p>
              <p className="blog-description">
                Blog van Nicolette Teeler obv een interview met mij.
              </p>
              <a 
                href="https://www.hulpbijhb.nl/nicolette/schooltrauma-en-behandeling/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="blog-link"
              >
                Lees meer →
              </a>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blogs

