import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Actueel.css'

function Actueel() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      title: 'Lezingen',
      intro: 'Ik geef graag interactieve lezingen, webinars of themabijeenkomsten. Als die gepland staan, zal ik ze hier plaatsen. Je kan me ook mailen om op de hoogte gehouden te worden. Als je zelf een bijeenkomst wil organiseren voor jouw school, organisatie of netwerk bespreek ik dat graag met je.',
      date: 'Van zaterdag 7 tot en met zondag 15 maart 2026, zal ik verschillende webinars geven over de thema\'s:',
      items: [
        'Brainspotting + ISTDP: het perspectief van lichaamseigen regulatie, heling en groei',
        'Wat je als ouder kan doen om de natuurlijke ontwikkeling van je kind weer op gang te brengen: de ongekende kracht van co-regulatie en hoe je die kan versterken',
        'De impact van verwerking van negatieve ervaringen voor topsporters, artiesten en andere toppresteerders',
        'Brainspotting + ISTDP als bijzonder effectieve ontwikkelaanpak voor (zeer) hoogbegaafden',
        'Schooltrauma',
        'Uitzonderlijke hoogbegaafdheid: hoeveel bewustzijn kan een mens verdragen. En hoe?'
      ],
      text: 'Houd deze website in de gaten voor details of kijk voor het hele programma op'
    },
    EN: {
      title: 'Events',
      intro: 'I enjoy giving interactive lectures, webinars, and themed sessions. When any are scheduled, I will post them here. You can also email me if you\'d like to be kept informed. If you would like to organise a session for your school, organisation, or network, I\'d be happy to discuss the possibilities with you.',
      date: 'Join me for a series of webinars from Saturday, March 7 to Sunday, March 15, 2026, exploring key topics in personal development, healing, and peak performance:',
      items: [
        'Brainspotting + ISTDP: Unlocking your body\'s innate capacity for regulation, healing, and growth',
        'Supporting your child\'s natural development: Harnessing the power of co-regulation and learning how to strengthen it',
        'The impact of processing adverse experiences for top performers: Insights for athletes, artists, and high achievers',
        'Brainspotting + ISTDP as a uniquely effective development approach for (highly) gifted individuals:',
        'School-related trauma: Understanding and addressing its impact',
        'Exceptional giftedness: How much awareness can a person handle - and how to manage it'
      ],
      text: 'Keep an eye on this website for details, or see the full programm at'
    }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="actueel-page">
        <div className="page-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="actueel-content">
            <p className="actueel-intro">{t.intro}</p>

            <div className="actueel-highlight">
              <p className="actueel-date">{t.date}</p>
              <ul className="actueel-list">
                {t.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="actueel-text">
                {t.text}{' '}
                <a href="https://weekvandehoogbegaafdheid.nl/" target="_blank" rel="noopener noreferrer" className="actueel-link">
                  https://weekvandehoogbegaafdheid.nl/
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Actueel

