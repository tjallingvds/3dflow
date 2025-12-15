import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/MainContent.css'

function MainContent() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      p1: 'Wat je raakt of belemmert, wordt niet zozeer bepaald door wat er nú gebeurt, maar voornamelijk door eerdere ervaringen die niet verwerkt konden worden. Sporen daarvan blijven in het lichaam aanwezig en bepalen hoe je je voelt, reageert en presteert.',
      p2: 'In mijn praktijk voor Brainspotting + ISTDP richten we ons direct op deze sporen in het zenuwstelsel die onder je klachten liggen, zodat verwerking alsnog kan plaatsvinden. Belemmeringen lossen op en de natuurlijke ontwikkeling komt weer op gang. Ook voor ongekende prestatieverbetering!',
      cta: 'Lees meer over dit perspectief'
    },
    EN: {
      p1: 'What\'s bothering or blocking you isn\'t so much about what\'s happening right now, but much more about earlier experiences that couldn\'t be fully processed at the time. Traces of those experiences remain stored in the body, shaping how you feel, react, and perform.',
      p2: 'In my Brainspotting + ISTDP practice, we work directly with these imprints in the nervous system so that your system can pick up and carry forward the processing from where it once stopped. As this happens, inner blocks dissolve - physically and fundamentally - and your natural capacity for growth comes alive again. It\'s a profound process that opens the doors to extraordinary breakthroughs in performance and well-being.',
      cta: 'Learn more about this perspective'
    }
  }

  const t = translations[language]

  return (
    <section className="main-content">
      <div className="main-content-container">
        <div className="content-highlight">
          <p className="content-paragraph-large">
            {t.p1}
          </p>
          <p className="content-paragraph-large">
            {t.p2}
          </p>
          <div className="content-cta">
            <Link to="/perspectief" className="btn btn-primary">{t.cta}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainContent

