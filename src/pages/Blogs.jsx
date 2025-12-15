import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Blogs.css'

function Blogs() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      title: 'Blogs',
      intro: 'Met enige regelmaat post ik ook iets op',
      linkedin: 'LinkedIn',
      introEnd: '; voel je vrij om me daar te volgen of connecten.',
      blog1Title: 'Hoogbegaafdheid en uitzonderlijk hoogbegaafdheid in het verbindende perspectief van universele menselijke basisbehoeften en neurodiversiteit',
      blog1Meta: 'Op persoonlijke titel, juni 2025',
      blog2Title: '(School)trauma bij Hoogbegaafdheid: Ontdek waarom EMDR niet altijd werkt en welke therapie wél helpt',
      blog2Meta: 'Maart 2025',
      blog2Desc: 'Blog van Nicolette Teeler obv een interview met mij.',
      readMore: 'Lees meer →'
    },
    EN: {
      title: 'Blogs',
      intro: 'Feel free to follow me on',
      linkedin: 'LinkedIn',
      introEnd: ' for occasional posts and insights.',
      blog1Title: 'Giftedness and profound giftedness viewed through the connecting lens of universal human needs and neurodiversity',
      blog1Meta: 'June 2025',
      blog2Title: 'School trauma and giftedness: why EMDR isn\'t always effective - and what really helps',
      blog2Meta: 'March 2025',
      blog2Desc: 'Blog by Nicolette Teeler on the basis of an interview with me.',
      readMore: 'Read more →'
    }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="blogs-page">
        <div className="page-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="blogs-content">
            <p className="linkedin-intro">
              {t.intro}{' '}
              <a 
                href="https://www.linkedin.com/in/irenevanderschaar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="linkedin-link"
              >
                {t.linkedin}
              </a>
              {t.introEnd}
            </p>

            <article className="blog-post">
              <h2 className="blog-title">{t.blog1Title}</h2>
              <p className="blog-meta">{t.blog1Meta}</p>
              <a 
                href="https://stichtinghoogbegaafd.nl/2025/06/hoogbegaafdheid-en-uitzonderlijke-hoogbegaafdheid-in-het-verbindende-perspectief-van-universele-menselijke-basisbehoeften-en-neurodiversiteit" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="blog-link"
              >
                {t.readMore}
              </a>
            </article>

            <article className="blog-post">
              <h2 className="blog-title">{t.blog2Title}</h2>
              <p className="blog-meta">{t.blog2Meta}</p>
              <p className="blog-description">{t.blog2Desc}</p>
              <a 
                href="https://www.hulpbijhb.nl/nicolette/schooltrauma-en-behandeling/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="blog-link"
              >
                {t.readMore}
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

