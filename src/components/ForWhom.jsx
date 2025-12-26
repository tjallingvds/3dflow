import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/ForWhom.css'

function ForWhom() {
  const { language } = useLanguage()
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  const translations = {
    NL: {
      title: 'Voor wie?',
      intro: 'Ik werk met volwassenen en kinderen van alle leeftijden, aan alle mogelijke klachten en belemmeringen met en zonder medische diagnoses èn aan prestatieverbetering. Welke insteek je ook kiest, het gebeurt tegelijk, omdat het proces zich afspeelt op de diepere fysieke laag die niet door taal en denken wordt bepaald. De combinatie met ISTDP maakt dat weerstand, afweer of starre patronen van coping die in veel behandelingen een probleem zijn, geen belemmering vormen maar juist feilloos de weg wijzen. Iedere vorm van weerstand is een afdruk van de pijn eronder, dus is meteen bij de kern, precies waar we moeten zijn om met brainspotting te kunnen reguleren, helen en de natuurlijke groei weer op gang te brengen.',
      sections: {
        wat: {
          title: 'Voor wat?',
          p1: 'Thema\'s waar ik positieve ervaring mee heb, zijn spanning, angst, fobieën, faalangst, paniek, niet lekker in je vel zitten, vastlopen, vermoeidheid, geen energie, depressie, somberheid, zorgen maken, piekeren, slecht slapen, boosheid, niet voelen, niet weten wat je wil, gebrek aan zingeving, overweldigende gebeurtenissen zoals verlies van werk, gezondheid, scheiding, (als je kind een) eetstoornis (heeft), negatieve zelfovertuigingen, zelf ondermijnend gedrag, persoonlijkheidsproblematiek, relatieproblemen, seksuele thema\'s, trauma, traumatische gebeurtenis, schooltrauma, problematische hechting, eenzaamheid, verslaving, dwangstoornis, kort lontje, verdriet, rouw, hooggevoeligheid, issues rondom hb of uhb, autisme, overprikkeling, burn-out, pijn, dissociatie, tinnitus, niet tot je recht komen, dat je delen van jezelf - bijvoorbeeld onbevangenheid, goede zelfzorg, hobby\'s - bent kwijtgeraakt, pleasen, uiteenlopende thema\'s rondom geloof en zelfs stotteren, ofwel: iedere toestand die jou remt of waar jij last van hebt. Je hoeft niet precies te weten wàt er is, om te weten dàt het er is!',
          p2: 'Bij kinderen kan een en ander zich ook uiten als woedebuien, vastlopen, gedragsproblemen of bijvoorbeeld niet meer naar school willen of kunnen.',
          p3: 'Iedere situatie is anders. Ik bespreek graag met je wat jou belemmert en / of wat jij zou willen bereiken. Neem contact op voor een gratis kennismaking.'
        },
        ouders: {
          title: 'Ouders',
          p1: 'Een bijzondere categorie met wie ik werk zijn ouders van kinderen die om wat voor reden dan ook zijn vastgelopen. Als een kind een vis is, zijn de ouders het water. Ouders kunnen een bijzonder effectieve, natuurlijke ingang naar hun kind zijn. Naarmate ouders hun lading verwerken - een mens is zo gelukkig als zijn minst gelukkige kind, naast de lading van het eigen leven - komt de natuurlijke ontwikkeling in het kind vanzelf weer op gang. Het werkende mechanisme in het gezinssysteem is dat doordat de ouders verwerken, het natuurlijke, grotendeels onbewuste, autonome proces van co-regulatie van de ouders naar de kinderen versterkt wordt. De insteek via de ouders is altijd helpend naast behandeling van het kind zelf. In sommige gevallen is het voldoende om alleen met de ouders te werken of wil of kan het kind geen behandeling krijgen. Afhankelijk van de specifieke situatie kunnen we samen de aanpak kiezen die het meeste aansluit bij de situatie, wensen en mogelijkheden.',
          p2: 'Iedere situatie is anders. Ik bespreek het graag met je. Neem contact op voor een gratis kennismaking.'
        },
        hoogbegaafd: {
          title: 'Hoogbegaafd / uhb',
          p1: 'Ik werk veel met (zeer) hoogbegaafden. Hoogbegaafden hebben vaak van jongs af veel afwijzing ervaren, doordat ze vaak niet begrepen worden. Dat doet niet alleen pijn, maar roept ook allerlei beschermende patronen op zoals niet voelen, in je hoofd zitten, je afsluiten of rationaliseren, die verdere ontwikkeling en contact belemmeren en zo krachtig kunnen zijn dat het moeilijk is om er nog doorheen te komen. Als zelf (zeer) hoogbegaafde en met de combinatie van technieken waarmee ik werk - waardoor dergelijke patronen niet in de weg zitten, maar juist de weg wijzen - komen we er altijd bij, zodat belemmeringen kunnen oplossen en je vanzelf en op ieder gebied je niveau bereikt.',
          p2: 'Iedere situatie is anders. Ik bespreek graag met je wat jou belemmert en wat jij zou willen bereiken. Neem contact op voor een gratis kennismaking.'
        },
        prestatie: {
          title: 'Prestatieverbetering en creativiteit',
          p1: 'Het wezenlijke verschil tussen goed en geniaal, of iets mooi is of dat het je tot in de grond van je hart raakt, gaat verder dan vaardigheden. Uitzonderlijke kwaliteiten vragen een andere manier om te ontwikkelen: vergelijk een renpaard met een managepaard, een raceauto met een gezinsauto. De aansluiting op de eigenheid steekt nauwer. Topprestaties op welk gebied dan ook gebeuren waar excellente vaardigheden samenkomen met de toestand van vrije, onbelemmerde flow. Vrije toegang tot intuïtie, reflexen, creativiteit, fantasie, flow en inspiratie gaat over de mens onder de prestaties. Het fundament van al je prestaties ben je zelf, met alles wat je bij je draagt. Alles wat je als mens belemmert, beperkt ook je prestaties. Alles wat je daarin oplost, verbetert het fundament van je prestaties op een stuk waar je met trainen en studeren onmogelijk bij kan. Zo kan zelfs een kort traject een enorme impuls aan je prestaties geven en de nieuwe ruimte voor groei het rendement van je inspanningen onvergelijkbaar verhogen.',
          p2: 'In mijn werk met artiesten, topsporters, hoogbegaafden en anderen met bijzondere talenten, heb ik ervaren hoe boven jezelf uitstijgen in steeds grotere ringen verloopt: verwerken wat je belemmert, gevolgd door expansie tot je tegen de volgende grens oploopt, verwerking, expansie en zo oneindig verder. Je bent tenslotte je eigen grenzen. Of niet!',
          p3: 'Wil jij ook aan de slag om je talenten en prestaties fundamenteel verder te brengen? Ik bespreek graag met je wat jij zou willen bereiken en waar jij dan tegenaan loopt. Neem contact op voor een gratis kennismaking.'
        },
        coaching: {
          title: 'Coaching (vanuit werk)',
          p1: 'Organisaties hebben er in alle opzichten heel veel mee te winnen als medewerkers met plezier naar hun werk gaan, daar voldoening uit halen en zich voortdurend kunnen blijven ontwikkelen. Veel werkgevers hebben budgetten voor coaching: om jezelf te ontwikkelen, om duurzaam inzetbaar te blijven, om uitval te voorkomen of herstel te bespoedigen. Brainspotting + ISTDP is een bijzonder effectieve vorm van coaching, omdat het niet op gedragsniveau zit, maar belemmeringen fysiek en fundamenteel oplost. Dat geeft fundamentele ontwikkeling en groei waardoor iedere opleiding, training of cursus meer oplevert en alles beter, makkelijker en fijner gaat, zowel in je werk als in de rest van je leven. Ik ben lid van de beroepsorganisatie voor coaches, de NOBCO.',
          p2: 'Iedere vraag is net weer een beetje anders. Ik bespreek graag met je waar jij tegenaan loopt en wat je zou willen bereiken. Neem contact op voor een gratis kennismaking.'
        }
      },
      contact: 'Contact',
      ervaringen: 'Ervaringen'
    },
    EN: {
      title: 'For who?',
      intro: 'I work with adults and children of all ages, with all kinds of symptoms and blockages - with or without medical diagnoses - and for performance enhancement. Whatever your starting point, both will happen simultaneously, because the process takes place on a deeper physical level that is not defined by language or thought. The combination with ISTDP has the effect that resistance, defense, or rigid coping patterns, which in other treatments are often seen as obstacles, are not barriers here but instead precisely lead the way to the problem and the solution. Every form of resistance is an imprint of the pain underneath. That means it immediately takes us to the core: the very place where Brainspotting can regulate, heal, and restart the body\'s natural growth.',
      sections: {
        wat: {
          title: 'For what?',
          p1: 'I have positive experience with a very wide range of issues including: tension, anxiety, fear, phobia\'s, panic, general unease, feeling stuck, fatigue, low energy, depression, low mood, worry and rumination, sleeping problems, anger, emotional numbness, not knowing what you want, lack of meaning, overwhelming life events such as job loss, health crisis, divorce, (if your child has an) eating disorder, negative self-beliefs, self-sabotaging behaviour, personality disorders, relationship problems, sexual issues, trauma, traumatic experiences, childhood trauma and/or trauma related to school, problematic attachment, loneliness, addiction, obsessive-compulsive symptoms, a short fuse, grief, high sensitivity, issues related to giftedness or asynchronous development, autism, sensory overwhelm, burnout, chronic pain, dissociation, tinnitus, not being able to fully be yourself or having lost parts of yourself (for example spontaneity, good self-care, hobbies), people-pleasing, various themes around religion, and even stuttering - in short: any state that holds you back or causes suffering. You don\'t need to know exactly what is bothering you to know that something is bothering you.',
          p2: 'In children these difficulties may also present as tantrums, getting stuck, behavioral problems, or refusal to attend school.',
          p3: 'Every situation is different. I\'d be happy to talk with you about what\'s bothering you and / or what you\'d like to achieve. Contact me for a free introductory meeting.'
        },
        ouders: {
          title: 'Parents',
          p1: 'A special group I specialize in are parents of children who, for one reason or another, have become stuck. If a child is a fish, the parents are the water. I look as parents as a very good, natural entrance to the child. As parents process their own issues - a person is as happy as their least-happy child, alongside the load of their own life - the child\'s natural development usually resumes. The working mechanism in the family system is that, when parents process their own material, the largely unconscious, autonomic process of co-regulation between parents and children is strengthened. Working with parents is always helpful alongside the treatment of any child. In some cases working with the parents alone is sufficient, or the child may not want or be able to receive treatment. Depending on the specifics we can decide together about the approach that best fits the situation, wishes and possibilities.',
          p2: 'Every situation is different. I\'m happy to discuss it with you. Contact me for a free introductory meeting.'
        },
        hoogbegaafd: {
          title: 'Gifted / Highly Gifted',
          p1: 'I work extensively with gifted and highly gifted individuals. Most gifted people experience repeated rejection from an early age because they are so often misunderstood. That not only causes pain but also creates protective patterns, such as emotional numbing, living in the head, shutting down, or rationalizing, which hinder development and connection and can become so powerful that it\'s hard to get through them. As someone who is highly gifted myself and through the combination of techniques I use, with which protection patterns are no hindrance but precisely lead the way to both the problem and the solution, we can always access the underlying material so obstacles will resolve and you can reach your full potential in everything you do.',
          p2: 'Every situation is different. I\'m happy to discuss what holds you back and what you want to achieve. Contact me for a free introductory meeting.'
        },
        prestatie: {
          title: 'Performance Enhancement & Creativity',
          p1: 'The essential difference between competent and genius, or between something that is merely good and something that touches you to the core, goes beyond skills. Exceptional qualities require a different approach to develop them: think a racehorse vs. a school horse, a racing car vs. a family car. The attunement to individuality must be so much more refined. Top performance in any field can only emerge where excellent skills come together with a state of free, unobstructed flow. Free access to intuition, reflexes, creativity, imagination, flow and inspiration is about the person beneath the performance. Your performances are founded on who you are, with everything you carry with you. Anything that restricts you as a person also limits your performance. Anything you resolve at that level strengthens the foundation of your performance in ways that training and practice alone can never reach. Even a limited amount of sessions working together can provide a huge boost to your performance and make the rest of your efforts far more effective.',
          p2: 'In my work with artists, elite athletes, (highly) gifted and other high-talent individuals, I\'ve experienced how growth often unfolds in widening circles: processing what blocks you, expansion until the next boundary, processing that, further expansion, and so on. You are, after all, your own limit. Or not.',
          p3: 'Would you also like to fundamentally advance your talents and performance? I\'m happy to discuss what you want to achieve and the obstacles you face. Contact me for a free introductory meeting.'
        },
        coaching: {
          title: 'Employer-sponsored Coaching',
          p1: 'Organizations gain a great deal when employees enjoy their work, find fulfillment, and continue their development. Many employers have budgets for coaching: for personal development, sustainable employability, prevention of sick leave, or facilitating return to work. Brainspotting + ISTDP provides an especially effective form of coaching because it does not operate at the level of behaviour alone but works to resolve the underlying issues and limiting patterns at the physiological and foundational level. That leads to fundamental development and growth which also makes any training or course more effective and makes everything in work - and life - run more smoothly and enjoyably. I am a member of the professional association for coaches, NOBCO.',
          p2: 'Every situation is different. I\'m happy to discuss what you\'re facing and what you\'d like to achieve. Contact me for a free introductory meeting.'
        }
      },
      contact: 'Contact',
      ervaringen: 'Reviews'
    }
  }

  const t = translations[language]

  return (
    <section className="for-whom" id="voor-wie">
      <div className="for-whom-container">
        <h2 className="section-title">{t.title}</h2>
        
        <div className="intro-text">
          <p className="for-whom-paragraph">
            {t.intro}
          </p>
        </div>

        <div className="expandable-sections">
          <ExpandableItem
            title={t.sections.wat.title}
            isOpen={openSection === 'wat'}
            onClick={() => toggleSection('wat')}
          >
            <p>{t.sections.wat.p1}</p>
            <p>{t.sections.wat.p2}</p>
            <p>{t.sections.wat.p3}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-small">{t.contact}</Link>
              <Link to="/reviews" className="btn btn-outline btn-small">{t.ervaringen}</Link>
            </div>
          </ExpandableItem>

          <ExpandableItem
            title={t.sections.ouders.title}
            isOpen={openSection === 'ouders'}
            onClick={() => toggleSection('ouders')}
          >
            <p>{t.sections.ouders.p1}</p>
            <p>{t.sections.ouders.p2}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-small">{t.contact}</Link>
              <Link to="/reviews" className="btn btn-outline btn-small">{t.ervaringen}</Link>
            </div>
          </ExpandableItem>

          <ExpandableItem
            title={t.sections.hoogbegaafd.title}
            isOpen={openSection === 'hoogbegaafd'}
            onClick={() => toggleSection('hoogbegaafd')}
          >
            <p>{t.sections.hoogbegaafd.p1}</p>
            <p>{t.sections.hoogbegaafd.p2}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-small">{t.contact}</Link>
              <Link to="/reviews" className="btn btn-outline btn-small">{t.ervaringen}</Link>
            </div>
          </ExpandableItem>

          <ExpandableItem
            title={t.sections.prestatie.title}
            isOpen={openSection === 'prestatie'}
            onClick={() => toggleSection('prestatie')}
          >
            <p>{t.sections.prestatie.p1}</p>
            <p>{t.sections.prestatie.p2}</p>
            <p>{t.sections.prestatie.p3}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-small">{t.contact}</Link>
              <Link to="/reviews" className="btn btn-outline btn-small">{t.ervaringen}</Link>
            </div>
          </ExpandableItem>

          <ExpandableItem
            title={t.sections.coaching.title}
            isOpen={openSection === 'coaching'}
            onClick={() => toggleSection('coaching')}
          >
            <p>{t.sections.coaching.p1}</p>
            <p>{t.sections.coaching.p2}</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-small">{t.contact}</Link>
              <Link to="/reviews" className="btn btn-outline btn-small">{t.ervaringen}</Link>
            </div>
          </ExpandableItem>
        </div>
      </div>
    </section>
  )
}

function ExpandableItem({ title, children, isOpen, onClick, isLink, linkTo }) {
  if (isLink && linkTo) {
    return (
      <Link to={linkTo} className="expandable-item expandable-link">
        <div className="expandable-header">
          <h3 className="expandable-title">{title}</h3>
          <svg 
            className="expandable-icon" 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none"
          >
            <path 
              d="M7.5 5L12.5 10L7.5 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </Link>
    )
  }

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
