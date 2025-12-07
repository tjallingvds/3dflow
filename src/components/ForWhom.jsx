import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/ForWhom.css'

function ForWhom() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section className="for-whom" id="voor-wie">
      <div className="for-whom-container">
        <h2 className="section-title">Voor wie?</h2>
        
        <div className="intro-text">
          <p className="for-whom-paragraph">
            Ik werk met volwassenen en kinderen van alle leeftijden, aan alle mogelijke klachten en 
            belemmeringen met en zonder medische diagnoses èn aan prestatieverbetering. Welke insteek 
            je ook kiest, het gebeurt tegelijk, omdat het proces zich afspeelt op de diepere fysieke 
            laag die niet door taal en denken wordt bepaald. De combinatie met ISTDP maakt dat weerstand, 
            afweer of starre patronen van coping die in veel behandelingen een probleem zijn, geen 
            belemmering vormen maar juist feilloos de weg wijzen. Iedere vorm van weerstand is een afdruk 
            van de pijn eronder, dus is meteen bij de kern, precies waar we moeten zijn om met brainspotting 
            te kunnen reguleren, helen en de natuurlijke groei weer op gang te brengen.
          </p>
        </div>

        <div className="expandable-sections">
          <ExpandableItem
            title="Voor wat?"
            isOpen={openSection === 'wat'}
            onClick={() => toggleSection('wat')}
          >
            <p>
              Thema's waar ik positieve ervaring mee heb, zijn spanning, angst, fobieën, faalangst, 
              paniek, niet lekker in je vel zitten, vastlopen, vermoeidheid, geen energie, depressie, 
              somberheid, zorgen maken, piekeren, slecht slapen, boosheid, niet voelen, niet weten wat 
              je wil, gebrek aan zingeving, overweldigende gebeurtenissen zoals verlies van werk, 
              gezondheid, scheiding, negatieve zelfovertuigingen, zelf ondermijnend gedrag, 
              persoonlijkheidsproblematiek, relatieproblemen, seksuele thema's, trauma, traumatische 
              gebeurtenis, schooltrauma, problematische hechting, eenzaamheid, verslaving, dwangstoornis, 
              kort lontje, verdriet, rouw, hooggevoeligheid, issues rondom hb of uhb, autisme, 
              overprikkeling, burn-out, pijn, dissociatie, tinnitus, niet tot je recht komen, dat je 
              delen van jezelf - bijvoorbeeld onbevangenheid, goede zelfzorg, hobby's - bent kwijtgeraakt, 
              pleasen, uiteenlopende thema's rondom geloof en zelfs stotteren, ofwel: iedere toestand die 
              jou remt of waar jij last van hebt. Je hoeft niet precies te weten wàt er is, om te weten 
              dàt het er is!
            </p>
            <p>
              Bij kinderen kan een en ander zich ook uiten als woedebuien, vastlopen, gedragsproblemen 
              of bijvoorbeeld niet meer naar school willen.
            </p>
            <p>
              Iedere situatie is anders. Ik bespreek graag met je wat jou belemmert en / of wat jij zou 
              willen bereiken. Neem contact op voor een gratis kennismaking.
            </p>
            <Link to="/contact" className="btn btn-outline btn-small">Gratis kennismaking</Link>
          </ExpandableItem>

          <ExpandableItem
            title="Ouders"
            isOpen={openSection === 'ouders'}
            onClick={() => toggleSection('ouders')}
          >
            <p>
              Een bijzondere categorie met wie ik werk zijn ouders van kinderen die om wat voor reden dan 
              ook zijn vastgelopen. Als een kind een vis is, zijn de ouders het water. Ouders kunnen een 
              bijzonder effectieve, natuurlijke ingang naar hun kind zijn. Naarmate ouders hun lading 
              verwerken - een mens is zo gelukkig als zijn minst gelukkige kind, naast de lading van het 
              eigen leven - komt de natuurlijke ontwikkeling in het kind vanzelf weer op gang. Het werkende 
              mechanisme in het gezinssysteem is dat doordat de ouders verwerken, het natuurlijke, grotendeels 
              onbewuste, autonome proces van co-regulatie van de ouders naar de kinderen versterkt wordt. De 
              insteek via de ouders is altijd helpend naast behandeling van het kind zelf. In sommige gevallen 
              is het voldoende om alleen met de ouders te werken of wil of kan het kind geen behandeling 
              krijgen. Afhankelijk van de specifieke situatie kunnen we samen de aanpak kiezen die het meeste 
              aansluit bij de situatie, wensen en mogelijkheden.
            </p>
            <p>
              Iedere situatie is anders. Ik bespreek het graag met je. Neem contact op voor een gratis 
              kennismaking.
            </p>
            <Link to="/contact" className="btn btn-outline btn-small">Gratis kennismaking</Link>
          </ExpandableItem>

          <ExpandableItem
            title="Hoogbegaafd / uhb"
            isOpen={openSection === 'hoogbegaafd'}
            onClick={() => toggleSection('hoogbegaafd')}
          >
            <p>
              Ik werk veel met (zeer) hoogbegaafden. Hoogbegaafden hebben vaak van jongs af veel afwijzing 
              ervaren, doordat ze vaak niet begrepen worden. Dat doet niet alleen pijn, maar roept ook 
              allerlei beschermende patronen op zoals niet voelen, in je hoofd zitten, je afsluiten of 
              rationaliseren, die verdere ontwikkeling en contact belemmeren en zo krachtig kunnen zijn dat 
              het moeilijk is om er nog doorheen te komen. Als zelf (zeer) hoogbegaafde en met de combinatie 
              van technieken waarmee ik werk - waardoor dergelijke patronen niet in de weg zitten, maar juist 
              de weg wijzen - komen we er altijd bij, zodat belemmeringen kunnen oplossen en je vanzelf en op 
              ieder gebied je niveau bereikt.
            </p>
            <p>
              Iedere situatie is anders. Ik bespreek graag met je wat jou belemmert en wat jij zou willen 
              bereiken. Neem contact op voor een gratis kennismaking.
            </p>
            <Link to="/contact" className="btn btn-outline btn-small">Gratis kennismaking</Link>
          </ExpandableItem>

          <ExpandableItem
            title="Prestatieverbetering en creativiteit"
            isOpen={openSection === 'prestatie'}
            onClick={() => toggleSection('prestatie')}
          >
            <p>
              Het wezenlijke verschil tussen goed en geniaal, of iets mooi is of dat het je tot in de grond 
              van je hart raakt, gaat verder dan vaardigheden. Uitzonderlijke kwaliteiten vragen een andere 
              manier om te ontwikkelen: vergelijk een renpaard met een managepaard, een raceauto met een 
              gezinsauto. De aansluiting op de eigenheid steekt nauwer. Topprestaties op welk gebied dan ook 
              gebeuren waar excellente vaardigheden samenkomen met de toestand van vrije, onbelemmerde flow. 
              Vrije toegang tot intuïtie, reflexen, creativiteit, fantasie, flow en inspiratie gaat over de 
              mens onder de prestaties. Het fundament van al je prestaties ben je zelf, met alles wat je bij 
              je draagt. Alles wat je als mens belemmert, beperkt ook je prestaties. Alles wat je daarin 
              oplost, verbetert het fundament van je prestaties op een stuk waar je met trainen en studeren 
              onmogelijk bij kan. Zo kan zelfs een kort traject een enorme impuls aan je prestaties geven en 
              de nieuwe ruimte voor groei het rendement van je inspanningen onvergelijkbaar verhogen.
            </p>
            <p>
              In mijn werk met artiesten, topsporters, hoogbegaafden en anderen met bijzondere talenten, heb 
              ik ervaren hoe boven jezelf uitstijgen in steeds grotere ringen verloopt: verwerken wat je 
              belemmert, gevolgd door expansie tot je tegen de volgende grens oploopt, verwerking, expansie 
              en zo oneindig verder. Je bent tenslotte je eigen grenzen. Of niet!
            </p>
            <p>
              Wil jij ook aan de slag om je talenten en prestaties fundamenteel verder te brengen? Ik bespreek 
              graag met je wat jij zou willen bereiken en waar jij dan tegenaan loopt. Neem contact op voor een 
              gratis kennismaking.
            </p>
            <Link to="/contact" className="btn btn-outline btn-small">Gratis kennismaking</Link>
          </ExpandableItem>

          <ExpandableItem
            title="Coaching (vanuit werk)"
            isOpen={openSection === 'coaching'}
            onClick={() => toggleSection('coaching')}
          >
            <p>
              Organisaties hebben er in alle opzichten heel veel mee te winnen als medewerkers met plezier 
              naar hun werk gaan, daar voldoening uit halen en zich voortdurend kunnen blijven ontwikkelen. 
              Veel werkgevers hebben budgetten voor coaching: om jezelf te ontwikkelen, om duurzaam inzetbaar 
              te blijven, om uitval te voorkomen of herstel te bespoedigen. Brainspotting + ISTDP is een 
              bijzonder effectieve vorm van coaching, omdat het niet op gedragsniveau zit, maar belemmeringen 
              fysiek en fundamenteel oplost. Dat geeft fundamentele ontwikkeling en groei waardoor iedere 
              opleiding, training of cursus meer oplevert en alles beter, makkelijker en fijner gaat, zowel 
              in je werk als in de rest van je leven. Ik ben lid van de beroepsorganisatie voor coaches, 
              de NOBCO.
            </p>
            <p>
              Iedere vraag is net weer een beetje anders. Ik bespreek graag met je waar jij tegenaan loopt 
              en wat je zou willen bereiken. Neem contact op voor een gratis kennismaking.
            </p>
            <Link to="/contact" className="btn btn-outline btn-small">Gratis kennismaking</Link>
          </ExpandableItem>
        </div>
      </div>
    </section>
  )
}

function ExpandableItem({ title, children, isOpen, onClick }) {
  return (
    <div className={`expandable-item ${isOpen ? 'open' : ''}`}>
      <button className="expandable-header" onClick={onClick}>
        <h3 className="expandable-title">{title}</h3>
        <svg 
          className="expandable-icon" 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none"
        >
          <path 
            d="M5 7.5L10 12.5L15 7.5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="expandable-content">
          {children}
        </div>
      )}
    </div>
  )
}

export default ForWhom

