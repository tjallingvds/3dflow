import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/AboutMe.css'

function AboutMe() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      title: 'Over mij',
      text: 'Ik ben Irene van der Schaar. Mijn ambacht en expertise is fundamentele ontwikkeling, inclusief alles wat dat belemmert. Met de combinatie van Brainspotting + ISTDP help ik je om letterlijk en figuurlijk in de ogen te kijken wat je belemmert, waardoor dat fysiek verwerkt wordt en oplost. Wat het ook is. Ook voor prestatieverbetering in bijvoorbeeld topsport of muziek. Als ervaringsdeskundig (zeer) hoogbegaafd heb ik een bijzondere bandbreedte om nauwgezet te kunnen aansluiten op de eigenheid van ieder mens. Ik ben sensitief, scherp, betrokken en stevig. En laat niet los voordat we er zijn.',
      cta: 'Lees meer over mij',
      reviews: 'Ervaringen'
    },
    EN: {
      title: 'About me',
      text: 'I\'m Irene van der Schaar. My craft and expertise is fundamental human development - and everything that stands in its way. Through the powerful combination of Brainspotting + ISTDP, I help you meet whatever holds you back so that your system can continue the natural process of integration, release and growth - whether you\'re working through emotional pain or reaching for new levels in any kind of performance. As an experience expert profound giftedness, I bring a wide frame of reference and sensitivity that allow me to connect closely with any person\'s uniqueness. I am warm, perceptive, sharp and deeply engaged. I stay with you until we\'ve reached your goals.',
      cta: 'Learn more about me',
      reviews: 'Experiences'
    }
  }

  const t = translations[language]

  return (
    <section className="about-me" id="over-mij">
      <div className="about-container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              src="/irene-photo.jpg" 
              alt="Irene van der Schaar" 
              className="about-image"
            />
          </div>

          <div className="about-text">
            <p className="about-paragraph">
              {t.text}
            </p>

            <div className="about-cta">
              <Link to="/over-mij" className="btn btn-primary">{t.cta}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

