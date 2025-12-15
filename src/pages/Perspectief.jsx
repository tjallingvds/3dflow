import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/Perspectief.css'

function Perspectief() {
  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="perspectief-page">
        <div className="page-container">
          <h1 className="page-title">Perspectief</h1>
          
          <div className="page-content">
            <div className="content-section">
              <p className="page-paragraph">
                Alles wat je belemmert is een persoonlijke beleving. Wat er ook aan de hand is, hoeveel last je ervan hebt wordt bepaald door wat je eerder in je leven hebt meegemaakt. Negatieve ervaringen die niet verwerkt kunnen worden, worden in je lichaam als het ware onder het tapijt geveegd, waarna je er niet meer goed bij kan, maar ze nog wel steeds geraakt kunnen worden. Zo blijven ze onbewust je beleving en gevoel bepalen, energie kosten èn bronnen van klachten zijn. Net zo lang tot ze alsnog verwerkt zijn.
              </p>
            </div>

            <div className="content-section">
              <p className="page-paragraph">
                Verwerking is een fysiek, autonoom proces van regulatie, heling en groei dat altijd werkzaam is wanneer de juiste omstandigheden zich voordoen. Zoals alle vitale functies van ons lichaam gebeurt het onbewust, dat wil zeggen dat het niet door ons bewuste denken wordt aangestuurd; het lichaam kan dit het beste zelf. Het meest helpende wat ons denkende, sturende hoofd kan doen, is zorgen voor de juiste omstandigheden en volgen. Dit uitgangspunt biedt een ander perspectief dan dat van de GGZ, die uitgaat van diagnoses en daarbij behorende behandelingen. Beide perspectieven kunnen naast elkaar bestaan en elkaar aanvullen. Je hoeft niet precies te weten wàt het is, om te ervaren dàt het er is. Iedere klacht of belemmering is een beleving. Iedere beleving wordt voor een belangrijk deel bepaald door eerdere ervaringen en is daardoor vatbaar voor verwerking.
              </p>
            </div>

            <div className="coregulation-box">
              <h2 className="box-title">Co-regulatie</h2>
              <p className="page-paragraph">
                De technieken van Brainspotting + ISTDP en mijn zorgvuldig aansluitende begeleiding creëren de omstandigheden waaronder het lichaamseigen proces van regulatie, heling en groei weer op gang komt. Simpel, universeel en ongekend krachtig. Vergelijk een kind dat huilt. Wat er ook aan de hand is en welke eventuele diagnoses er ook van toepassing zijn, het is ook gewoon een kind dat ergens door geraakt is en kennelijk niet in staat is om zichzelf te reguleren. De meest fundamentele manier om het te laten stoppen met huilen, is door het afgestemde, oordeelloze aandacht te geven. Dan komt het vanzelf tot rust en gaat het weer spelen. Dat is co-regulatie: samen zijn bij wat in je eentje niet te dragen is, zodat dat niet hoeft worden weggemaakt (coping, afweer) maar verwerkt kan worden. Niet langer voor je uit blijven schuiven, maar fundamenteel oplossen. Ook voor creatieve - en topprestaties. Naar keuze online of in mijn praktijk in Rotterdam. In het Nederlands of in het Engels; er hoeft niet heel veel gepraat te worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Perspectief

