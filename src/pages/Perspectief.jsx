import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Perspectief.css'

function Perspectief() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      title: 'Perspectief',
      p1: 'Alles wat je belemmert is een persoonlijke beleving. Wat er ook aan de hand is, hoeveel last je ervan hebt wordt bepaald door wat je eerder in je leven hebt meegemaakt. Negatieve ervaringen die niet verwerkt kunnen worden, worden in je lichaam als het ware onder het tapijt geveegd, waarna je er niet meer goed bij kan, maar ze nog wel steeds geraakt kunnen worden. Zo blijven ze onbewust je beleving en gevoel bepalen, energie kosten èn bronnen van klachten zijn. Net zo lang tot ze alsnog verwerkt zijn.',
      p2: 'Verwerking is een fysiek, autonoom proces van regulatie, heling en groei dat altijd werkzaam is wanneer de juiste omstandigheden zich voordoen. Zoals alle vitale functies van ons lichaam gebeurt het onbewust, dat wil zeggen dat het niet door ons bewuste denken wordt aangestuurd; het lichaam kan dit het beste zelf. Het meest helpende wat ons denkende, sturende hoofd kan doen, is zorgen voor de juiste omstandigheden en volgen. Dit uitgangspunt biedt een ander perspectief dan dat van de GGZ, die uitgaat van diagnoses en daarbij behorende behandelingen. Beide perspectieven kunnen naast elkaar bestaan en elkaar aanvullen. Je hoeft niet precies te weten wàt het is, om te ervaren dàt het er is. Iedere klacht of belemmering is een beleving. Iedere beleving wordt voor een belangrijk deel bepaald door eerdere ervaringen en is daardoor vatbaar voor verwerking.',
      coregulationTitle: 'Co-regulatie',
      coregulation: 'De technieken van Brainspotting + ISTDP en mijn zorgvuldig aansluitende begeleiding creëren de omstandigheden waaronder het lichaamseigen proces van regulatie, heling en groei weer op gang komt. Simpel, universeel en ongekend krachtig. Vergelijk een kind dat huilt. Wat er ook aan de hand is en welke eventuele diagnoses er ook van toepassing zijn, het is ook gewoon een kind dat ergens door geraakt is en kennelijk niet in staat is om zichzelf te reguleren. De meest fundamentele manier om het te laten stoppen met huilen, is door het afgestemde, oordeelloze aandacht te geven. Dan komt het vanzelf tot rust en gaat het weer spelen. Dat is co-regulatie: samen zijn bij wat in je eentje niet te dragen is, zodat dat niet hoeft worden weggemaakt (coping, afweer) maar verwerkt kan worden. Niet langer voor je uit blijven schuiven, maar fundamenteel oplossen. Ook voor creatieve - en topprestaties. Naar keuze online of in mijn praktijk in Rotterdam. In het Nederlands of in het Engels; er hoeft niet heel veel gepraat te worden.',
      brainspottingButton: 'Brainspotting + ISTDP'
    },
    EN: {
      title: 'Perspective',
      p1: 'Everything that limits you is a personal experience. Whatever is bothering you, the extent to which it affects you is shaped by what you have experienced earlier in life. Negative experiences that could not be processed are, so to speak, swept under the carpet in the body. You may no longer have conscious access to them, yet they can still be triggered. In this way they continue to influence your experience and emotional state unconsciously, consume energy, and remain a source of symptoms - until they are eventually processed.',
      p2: 'Processing is a physical, autonomous process of regulation, healing and growth that naturally unfolds when the right conditions are present. Like all vital bodily functions, it happens outside conscious control; it is not directed by thinking, but regulated by the body itself. The most helpful role of the conscious mind is therefore to create the right conditions and to follow what unfolds. This perspective differs from that of our mental health care system, which is primarily organized around diagnoses and corresponding treatments. The two perspectives can coexist and complement each other. You don\'t need to know exactly what it is to know that it is there. Every symptom or limitation is an experience. Every experience is largely shaped by earlier experiences and is therefore open to processing.',
      coregulationTitle: 'Co-regulation',
      coregulation: 'The techniques of Brainspotting + ISTDP, together with my carefully attuned guidance, create the conditions under which the body\'s own process of regulation, healing and growth can resume. Simple, universal, and remarkably powerful. Think of a child who is crying. Whatever is going on, and whatever diagnoses might apply, it is also a child who has been affected by something and is not able to regulate on their own. The most fundamental way to help the child settle is through attuned, non-judgmental presence. The child will calm down naturally and return to play. This is co-regulation: being together with what cannot yet be carried alone, so that it does not have to be pushed away (with coping or defence), but can be processed. Not postponed, but resolved at the root. Also including in the context of creativity and peak performance. Sessions can take place online or in my practice in Rotterdam, in Dutch or English. Little talking is required.',
      brainspottingButton: 'Brainspotting + ISTDP'
    }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="perspectief-page">
        <div className="page-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="page-content">
            <div className="content-section">
              <p className="page-paragraph">
                {t.p1}
              </p>
            </div>

            <div className="content-section">
              <p className="page-paragraph">
                {t.p2}
              </p>
            </div>

            <div className="coregulation-box">
              <h2 className="box-title">{t.coregulationTitle}</h2>
              <p className="page-paragraph">
                {t.coregulation}
              </p>
              <div className="coregulation-cta">
                <Link to="/brainspotting" className="btn btn-primary">{t.brainspottingButton}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Perspectief

