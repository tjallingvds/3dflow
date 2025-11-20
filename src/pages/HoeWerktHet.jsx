import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/HoeWerktHet.css'

function HoeWerktHet() {
  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="hoe-werkt-het-page">
        <div className="page-container">
          <h1 className="page-title">Hoe werkt het?</h1>
          
          <div className="page-content">
            <div className="intro-section">
              <p className="page-paragraph highlight">
                Wat je raakt of belemmert, wordt niet zozeer bepaald door wat er nú gebeurt, maar 
                voornamelijk door eerdere ervaringen die niet verwerkt konden worden. Sporen daarvan 
                blijven in het lichaam aanwezig en bepalen hoe je je voelt, reageert en presteert. In 
                mijn praktijk voor Brainspotting + ISTDP richten we ons direct op deze sporen in het 
                zenuwstelsel die onder je klachten liggen, zodat verwerking alsnog kan plaatsvinden. 
                Belemmeringen lossen op en de natuurlijke ontwikkeling komt weer op gang. Ook voor 
                ongekende prestatieverbetering!
              </p>
            </div>

            <div className="content-section">
              <p className="page-paragraph">
                Alles wat je belemmert is een persoonlijke beleving. Wat er ook aan de hand is, 
                hoeveel last je ervan hebt wordt bepaald door wat je eerder in je leven hebt meegemaakt. 
                Negatieve ervaringen die niet verwerkt kunnen worden, worden in je lichaam als het ware 
                onder het tapijt geveegd, waarna je er niet meer goed bij kan, maar ze nog wel steeds 
                geraakt kunnen worden. Zo blijven ze onbewust je beleving en gevoel bepalen, energie 
                kosten èn bronnen van klachten zijn. Net zo lang tot ze alsnog verwerkt zijn.
              </p>
            </div>

            <div className="content-section">
              <p className="page-paragraph">
                Verwerking is een fysiek, autonoom proces van regulatie, heling en groei dat altijd 
                werkzaam is wanneer de juiste omstandigheden zich voordoen. Zoals alle vitale functies 
                van ons lichaam gebeurt het onbewust, dat wil zeggen dat het niet door ons bewuste 
                denken wordt aangestuurd; het lichaam kan dit het beste zelf. Het meest helpende wat 
                ons denkende, sturende hoofd kan doen, is zorgen voor de juiste omstandigheden en 
                volgen. Dit uitgangspunt biedt een ander perspectief dan dat van de GGZ, die uitgaat 
                van diagnoses en daarbij behorende behandelingen. Beide perspectieven kunnen naast 
                elkaar bestaan en elkaar aanvullen.
              </p>
            </div>

            <div className="metaphor-box">
              <p className="page-paragraph">
                Vergelijk een kind dat huilt. Wat er ook aan de hand is en welke eventuele diagnoses 
                er ook van toepassing zijn, het is ook gewoon een kind dat ergens door geraakt is en 
                kennelijk niet in staat is om zichzelf te reguleren. De meest fundamentele manier om 
                het te laten stoppen met huilen, is door het afgestemde, oordeelloze aandacht te geven. 
                Dan komt het vanzelf tot rust en gaat het weer spelen.
              </p>
              <p className="page-paragraph emphasis">
                Dat is co-regulatie: samen zijn bij wat in je eentje niet te dragen is, zodat dat 
                niet hoeft worden weggemaakt (coping, afweer) maar verwerkt kan worden. Niet langer 
                voor je uit blijven schuiven, maar fundamenteel oplossen.
              </p>
            </div>

            <div className="content-section">
              <p className="page-paragraph">
                Je hoeft niet precies te weten wàt het is, om te ervaren dàt het er is. Iedere 
                klacht of belemmering is een beleving. Iedere beleving wordt voor een belangrijk deel 
                bepaald door eerdere ervaringen en is daardoor vatbaar voor verwerking. De technieken 
                van Brainspotting + ISTDP en mijn zorgvuldig aansluitende begeleiding creëren de 
                omstandigheden waaronder het lichaamseigen proces van regulatie, heling en groei weer 
                op gang komt. Simpel, universeel en ongekend krachtig. Ook voor creatieve - en 
                topprestaties. Naar keuze online of in mijn praktijk in Rotterdam. In het Nederlands 
                of in het Engels; er hoeft niet heel veel gepraat te worden.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HoeWerktHet

