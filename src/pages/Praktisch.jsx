import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Praktisch.css'

function Praktisch() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      title: 'Praktisch',
      availabilityTitle: 'Snelle en ruime beschikbaarheid',
      availability: 'Ik ben over het algemeen op korte termijn beschikbaar. Afspraken kunnen iedere werkdag plaatsvinden en in uitzonderlijke gevallen in overleg ook buiten kantooruren.',
      trajectoryTitle: 'Traject',
      trajectory1: 'Als je interesse hebt om aan de slag te gaan, kan je contact opnemen via telefoon, app of mail. Dan bespreken we je vraag en mail ik je het intakeformulier. Als je wil, kunnen we ook eerst een gratis kennismaking via zoom doen. De eerste sessie gaan we gelijk aan de slag. Het intakeformulier geeft achtergrond en richting aan het proces. Iedere sessie is anders en we werken meestal met wat er in het moment het meeste lading heeft. Alle lading heeft met elkaar te maken en zo komen we er altijd het snelste bij.',
      trajectory2: 'Ik werk in principe met sessies van anderhalf uur, omdat het associatief proces is, waarbij je van het één op het andere en steeds dieper komt. De optimale frequentie is in principe wekelijks, maar ieder traject is maatwerk dat we per sessie bepalen.',
      trajectory3: 'Het kan ook intensiever, bijvoorbeeld als je korte tijd ruimte hebt, in de aanloop naar een nieuwe uitdaging of iets wat staat te gebeuren of als de last heel hoog is. In dat geval is het zowel comfortabeler als efficiënter om het intensiever te doen, bijvoorbeeld om de 3 of 4 dagen. Een intensiever traject betekent niet dat er meer sessies nodig zijn. Wat we doen is de kelder opruimen: dat kan ook sneller en soms is het efficiënter om even door te pakken als het luik nog open staat in plaats van iedere keer weer alles aan de kant te moeten zetten.',
      onlineTitle: 'Online of live',
      online: 'Afspraken kunnen naar keuze online of in mijn praktijk in Rotterdam. Online brainspotting + ISTDP heeft in de praktijk bewezen uitstekend te werken; ik werk inmiddels meer dan de helft online. De oogposities waar je naar kijkt bij brainspotting kunnen in het scherm liggen of daarbuiten in je eigen ruimte. Ik begeleid je ze te vinden. Omdat we lading juist opzoeken om fundamenteel te kunnen verwerken, is eventuele lading die online werken zou kunnen oproepen zoals minder verbinding voelen of onzekerheid, geen belemmering maar juist één van de vele ingangen naar waar je last van hebt.',
      languageTitle: 'Taal',
      language: 'Ik werk in het Nederlands en in het Engels. Omdat we niet veel hoeven te praten, is het niet noodzakelijk om één van beide vloeiend te spreken.'
    },
    EN: {
      title: 'Practical info',
      availabilityTitle: 'Availability',
      availability: 'I\'m generally available on short notice. Appointments can be scheduled on any weekday and appointments outside office hours may be possible following consultation.',
      trajectoryTitle: 'Trajectory',
      trajectory1: 'If you\'re interested, you\'re welcome to contact me by phone, WhatsApp or email. We\'ll discuss your situation and goals and I\'ll email you an intake form. If you prefer, we can first have a free Zoom introduction. The first session we\'ll dive right in. The intake form provides background and direction; each session is different and we usually work with whatever issue you\'re most activated around in the moment. All activation is connected, and that\'s how we access it best and fastest.',
      trajectory2: 'I typically work with 90-minute sessions because the associative process brings you deeper with more time. The optimal frequency is usually weekly, but every trajectory is customized and we can decide per session.',
      trajectory3: 'The process can also be intensified, for instance if you have a limited window of time before a big challenge or if the burden is high. In such cases meeting every 3-4 days can be more efficient and more comfortable as well. An intensified trajectory does not necessarily mean more sessions overall. Think of it as clearing the basement: sometimes it\'s faster to keep at it so the basement can stay open, rather than keep having to put everything back in order and open again.',
      onlineTitle: 'Online or in-person',
      online: 'Appointments can be online or in my practice in Rotterdam, up to you to decide per session. Online Brainspotting + ISTDP has proven to work very well in practice; I now work more than half of my sessions online. The eye positions you use in Brainspotting can be on-screen or in your own space; I guide you to find them. Because we intentionally seek out activated material to process, possible online-related activation such as feeling less connected or more uncertain is not a hindrance but one of the many possible entry points into what is bothering you.',
      languageTitle: 'Language',
      language: 'I work in Dutch and in English. It is not necessary to talk a lot so you don\'t have to be fluent in either language.'
    }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="praktisch-page">
        <div className="page-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="content-section">
            <h2 className="section-heading">{t.availabilityTitle}</h2>
            <p className="section-text">{t.availability}</p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">{t.trajectoryTitle}</h2>
            <p className="section-text">{t.trajectory1}</p>
            <p className="section-text">{t.trajectory2}</p>
            <p className="section-text">{t.trajectory3}</p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">{t.onlineTitle}</h2>
            <p className="section-text">{t.online}</p>
          </div>

          <div className="content-section">
            <h2 className="section-heading">{t.languageTitle}</h2>
            <p className="section-text">{t.language}</p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Praktisch
