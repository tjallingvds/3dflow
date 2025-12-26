import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Kosten.css'

function Kosten() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      title: 'Kosten',
      privateTitle: 'Privé',
      private: 'Een sessie van anderhalf uur kost €185 (incl. 21% BTW). In overleg zijn ook sessies van een uur mogelijk, dat is dan €130 (incl. 21% BTW).',
      businessTitle: 'Zakelijk',
      business: 'Als je de kosten zakelijk kan nemen, doordat je een eigen bedrijf hebt of zzp bent, is het tarief €185 excl. BTW per sessie van anderhalf uur.',
      employerTitle: 'Via werkgever',
      employer: 'Veel werkgevers hebben budgetten voor coaching of reïntegratie. In dat geval stuur ik een offerte aan de werkgever en geldt een ander tarief.',
      outsideHoursTitle: 'Buiten kantooruren',
      outsideHours: 'In uitzonderlijke gevallen is het mogelijk om buiten kantooruren af te spreken. Daarvoor geldt dan een ander tarief.',
      introNote: 'De kennismaking via zoom is altijd gratis.',
      sessionsTitle: 'Hoeveel sessies heb ik nodig?',
      sessions1: 'Hoeveel sessies er nodig zijn, is uiteraard afhankelijk van wat je belemmert, wat er onder zit, hoe hardnekkig dat wordt weggehouden en andere persoonlijke factoren. Toch is er wel iets over te zeggen.',
      sessions2: 'Vanaf de eerste sessie ervaar je zelf hoe het werkt. Brainspotting werkt direct, alleen duurt het gemiddeld drie sessies voordat je hoofd de effecten niet afdoet als toeval. Van daaraf voel je zelf het beste hoe ver je bent, wat er nog zit en wanneer het "klaar" is. Dat merk je vanzelf. Idealiter is het klaar wanneer je klachten helemaal weg zijn, je je helemaal goed voelt en zin hebt om weer zelf verder te gaan. Voor een klacht als een fobie, waar helder is vast te stellen wanneer deze er niet meer is, zou dat rond de zeven sessies kunnen zijn.',
      sessions3: 'Ook als je om wat voor reden dan ook eerder stopt, zal je op een ander punt zijn dan waar je begon: bijvoorbeeld van het punt dat alles vast zat en geen enkele hulp aansloot, naar dat het in beweging gekomen is en de gewone dingen van het leven (vriendschap, reguliere zorg) ook weer aansluiten.',
      sessions4: 'Wat vaak gebeurt, is dat de afweging van de investering verschuift: naarmate de klachten oplossen, ervaar je waar het op een dieper niveau over gaat en wat de sessies je fundamenteel opleveren. We spreken af per sessie. Iedere sessie brengt je verder; in die zin haal je eruit wat je erin stopt.',
      contact: 'Contact'
    },
    EN: {
      title: 'Costs',
      privateTitle: 'Private',
      private: 'A standard 90-minute session: €185 (incl 21% VAT). One-hour sessions are available by arrangement: €130 (incl 21% VAT).',
      businessTitle: 'Business / Self-employed',
      business: 'If you can claim sessions as business expense (e.g. you are self-employed), the rate is €185 excl. VAT per 90-minute session.',
      employerTitle: 'Employer-sponsored Coaching',
      employer: 'Many employers have budgets for coaching or reintegration. In such cases I send a quotation to the employer and a different rate applies.',
      outsideHoursTitle: 'Outside office hours',
      outsideHours: 'In exceptional cases, appointment outside business hours may be possible, at a different fee.',
      introNote: 'Introductory Zoom meeting is always free.',
      sessionsTitle: 'How many sessions will I need?',
      sessions1: 'That depends, of course, on what is holding you back, what lies underneath, how persistently it is being blocked, and other personal factors. Still, there are some general things to say about is.',
      sessions2: 'From the very first session, you experience how the method works. Brainspotting has an immediate effect, although on average it takes about three sessions before your mind stops dismissing the results as "coincidence" or attributes them to other factors. After three sessions, you\'ll sense for yourself how far you\'ve come, what may still be present, and when it feels "done." You\'ll notice this naturally.',
      sessions3: 'Ideally, therapy is complete when your symptoms have fully disappeared, you feel well, and you have the energy and confidence to continue on your own. For something like a phobia - where it is very clear when it is no longer present - this could take around seven sessions.',
      sessions4: 'Even if, for whatever reason, you stop earlier, you will be at a different place than where you started. For example, you may have moved from feeling stuck and disconnected from any form of help, to feeling things shift again and being able to connect with the normal resources of life, such as friendships and regular care. What often happens is that the consideration to take the sessions shifts during the proces: as symptoms resolve and you experience more deeply what it is really about and what the sessions fundamentally give you, this often becomes the reason to continue for a while. It\'s up to you how far you will go. We plan one session at a time. Every session moves you forward - you get out what you put in.',
      contact: 'Contact'
    }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="kosten-page">
        <div className="page-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="pricing-section">
            <h2 className="pricing-heading">{t.privateTitle}</h2>
            <p className="pricing-text">{t.private}</p>
          </div>

          <div className="pricing-section">
            <h2 className="pricing-heading">{t.businessTitle}</h2>
            <p className="pricing-text">{t.business}</p>
          </div>

          <div className="pricing-section">
            <h2 className="pricing-heading">{t.employerTitle}</h2>
            <p className="pricing-text">{t.employer}</p>
          </div>

          <div className="pricing-section small">
            <h2 className="pricing-heading">{t.outsideHoursTitle}</h2>
            <p className="pricing-text">{t.outsideHours}</p>
          </div>

          <div className="intro-note">
            <p>{t.introNote}</p>
          </div>

          <div className="divider"></div>

          <div className="sessions-section">
            <h2 className="sessions-heading">{t.sessionsTitle}</h2>
            <p className="sessions-text">{t.sessions1}</p>
            <p className="sessions-text">{t.sessions2}</p>
            <p className="sessions-text">{t.sessions3}</p>
            <p className="sessions-text">{t.sessions4}</p>
          </div>

          <div className="contact-note">
            <Link to="/contact" className="btn btn-primary contact-btn">{t.contact}</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Kosten
