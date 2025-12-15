import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AboutMe.css'

function AboutMe() {
  return (
    <section className="about-me" id="over-mij">
      <div className="about-container">
        <h2 className="section-title">Over mij</h2>
        
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
              Ik ben Irene van der Schaar. Mijn ambacht en expertise is fundamentele ontwikkeling, 
              inclusief alles wat dat belemmert. Met de combinatie van Brainspotting + ISTDP help ik 
              je om letterlijk en figuurlijk in de ogen te kijken wat je belemmert, waardoor dat fysiek 
              verwerkt wordt en oplost. Wat het ook is. Ook voor prestatieverbetering in bijvoorbeeld 
              topsport of muziek. Als ervaringsdeskundig (zeer) hoogbegaafd heb ik een bijzondere 
              bandbreedte om nauwgezet te kunnen aansluiten op de eigenheid van ieder mens. Ik ben 
              sensitief, scherp, betrokken en stevig. En laat niet los voordat we er zijn.
            </p>

            <div className="about-cta">
              <Link to="/over-mij" className="btn btn-outline">Lees meer over mij</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

