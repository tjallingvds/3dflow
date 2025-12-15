import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/OverMij.css'

function OverMij() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      title: 'Over mij',
      p1: 'Ik ben Irene van der Schaar. Ik hou van echte ontmoetingen: samen zijn met wat er is, ook als dat ongemakkelijk of pijnlijk is. Van de houding van zien en gunnen, niet oordelen. Van taal, boeken, films, alles wat het wezenlijke raakt en ruimte geeft. Van richting, de goede kant op, wat steeds helderder wordt naarmate je minder door onbewuste lading bepaald wordt. Van topprestaties en onbegrensde groei, waarmee je je plek inneemt en de wereld mooier maakt.',
      p2: 'De rode draad in mijn leven is ontwikkeling, betekenis, levenskunst. Door die zonder concessies te volgen heb ik een veelzijdige maatschappelijke carrière doorlopen - van advocaat op een topkantoor tot directie/MT-rollen in non-profit organisaties en bij de overheid - die me uiteindelijk heeft thuisgebracht in mijn eigen praktijk, waar alles wat ik inmiddels in mij heb stroomt en op zijn plek valt. Ik ben geen arts of psycholoog en heb geen expertise op het gebied van enig ziektebeeld; mijn ambacht en expertise is ontwikkeling en alles wat dat belemmert. Ofwel: het creëren van de omstandigheden waaronder het lichaamseigen, autonome proces van regulatie, heling en groei vanzelf weer op gang komt op gebieden waar dat gestopt is: of dat zich nou uit in klachten of je je grenzen wil verleggen in topprestaties. Van daaraf blijft het vanzelf doorgaan en doorgaan en doorgaan: dat is het verschil tussen fundamenteel ontwikkelen en leren, oefenen, trainen.',
      p3: 'Ik ben sensitief, scherp, betrokken, stevig. Ik laat niet los voor we er zijn. Als ervaringsdeskundig (zeer) hoogbegaafd heb ik een bijzondere bandbreedte om zonder oordeel of begrenzing te kunnen aansluiten op de eigenheid van ieder mens, inclusief wat wordt verstaan onder neurodiversiteit. Zelf ben ik in alles wat ik doe voortdurend gericht op het steeds verder in de ogen kijken van mijn eigen lading en patronen, waardoor ik steeds zuiverder aanwezig ben. Ik denk dat het de onvoorwaardelijkheid, kracht en kwaliteit van mijn aanwezigheid zijn die mij effectief maken in wat ik doe: in feite hele krachtige co-regulatie, waardoor het proces van verwerking / verdere ontwikkeling weer op gang komt.',
      p4: 'Mensen die mij hebben geïnspireerd zijn David Grand, de ontwikkelaar van Brainspotting, van wie ik opleiding en persoonlijke supervisie heb ontvangen, Steven Shapiro van wie ik de beginselen van ISTDP heb geleerd, Gabor Maté over de bepalende rol van trauma, Deb Dana die voortbouwt op Steven Porges over een polyvagaal geïnspireerd leven en de talloze cliënten en anderen die ik heb ontmoet en die mij op stukjes hebben geïnspireerd met de unieke verhalen die ze belichamen.',
      linkedin: 'Voor professionele opleidingen en actuele ontwikkelingen: zie'
    },
    EN: {
      title: 'About me',
      p1: 'I am Irene van der Schaar. I value real encounters: being together with what is there, even when it is uncomfortable or painful. A stance of seeing and allowing, not judging. I love language, books, films - everything that touches the essence and creates space for it. I love direction - finding the right way forward, which becomes clearer as you are less driven by unconscious emotional activation. I love top performance and limitless growth, taking your place in the world and doing so contributing to a more beautiful world.',
      p2: 'The common thread in my life is development, meaning, expressed in the art of living. By following those without compromise, I have built a diverse career - from lawyer at a top firm to executive/management roles in nonprofit organizations and government. Ultimately, it has brought me home to my own practice, where everything I carry within me now flows and finds its place. I am not a doctor or psychologist, and I have no specific expertise in any medical conditions. My craft and expertise is development and everything that gets in the way of it. In other words: creating the conditions under which the body\'s natural, autonomous process of regulation, healing, and growth can restart where it has been blocked - whether that shows up as symptoms or as a desire to push beyond limits in top performances. Once restarted, the process keeps going, and going, and going. That is the difference between fundamental development and learning, practicing, training.',
      p3: 'I am sensitive, sharp, engaged, grounded. I don\'t let go until we\'ve fully reached your goal. As someone with lived experience of (very) high giftedness, I have a particular range that allows me to connect without judgment or limitation to each person\'s uniqueness, including what is known as neurodiversity. In everything I do, I remain focused on facing my own emotional activation and patterns more deeply, which allows me to be ever more present. I believe it is the unconditionality, strength, and quality of my presence that make me effective in what I do: in essence, powerful co-regulation, through which the process of processing and further development comes back into flow.',
      p4: 'I have been inspired by David Grand, the founder of Brainspotting, from whom I received training and personal supervision; Steven Shapiro, who introduced me to ISTDP; Gabor Maté on the defining role of trauma; Deb Dana, who builds on Stephen Porges\' work on a polyvagal-inspired life; and the countless clients and others I have met who have inspired me with the unique stories they embody.',
      linkedin: 'Professional training and recent developments: see'
    }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="over-mij-page">
        <div className="page-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="page-content">
            <div className="about-image-wrapper">
              <img 
                src="/irene-photo.jpg" 
                alt="Irene van der Schaar" 
                className="about-image"
              />
            </div>

            <div className="page-text">
              <p className="page-paragraph">
                {t.p1}
              </p>

              <p className="page-paragraph">
                {t.p2}
              </p>

              <p className="page-paragraph">
                {t.p3}
              </p>

              <p className="page-paragraph">
                {t.p4}
              </p>

              <p className="page-paragraph linkedin-note">
                {t.linkedin} <a href="https://www.linkedin.com/in/irenevanderschaar" target="_blank" rel="noopener noreferrer" className="linkedin-link">LinkedIn</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default OverMij

