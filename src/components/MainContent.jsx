import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MainContent.css'

function MainContent() {
  return (
    <section className="main-content">
      <div className="main-content-container">
        <h2 className="content-section-title">Over Brainspotting</h2>
        <div className="content-highlight">
          <p className="content-paragraph-large">
            Wat je raakt of belemmert, wordt niet zozeer bepaald door wat er nú gebeurt, maar 
            voornamelijk door eerdere ervaringen die niet verwerkt konden worden. Sporen daarvan 
            blijven in het lichaam aanwezig en bepalen hoe je je voelt, reageert en presteert. In 
            mijn praktijk voor Brainspotting + ISTDP richten we ons direct op deze sporen in het 
            zenuwstelsel die onder je klachten liggen, zodat verwerking alsnog kan plaatsvinden. 
            Belemmeringen lossen op en de natuurlijke ontwikkeling komt weer op gang. Ook voor 
            ongekende prestatieverbetering!
          </p>
          <div className="content-cta">
            <Link to="/hoe-werkt-het" className="btn btn-primary">Lees meer over hoe het werkt</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainContent

