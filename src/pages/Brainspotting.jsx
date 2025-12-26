import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Brainspotting.css'

function Brainspotting() {
  const { language } = useLanguage()
  
  const translations = {
    NL: {
      title: 'Brainspotting + ISTDP',
      whyTitle: 'Waarom Brainspotting?',
      why1: 'Het wordt steeds duidelijker dat de impact van onverwerkte ervaringen in alle delen van het zenuwstelsel ligt opgeslagen.',
      why2: 'Om volledig te kunnen helen, moeten daarom álle delen van het zenuwstelsel worden bereikt.',
      why3: 'Met Brainspotting gebeurt dat, doordat het gebruik maakt van de unieke ingang van de ogen. De ogen - betrokken bij waarneming, oriëntatie, (on)veiligheid en hechting - zijn letterlijk een uitstulping van het brein, en staan rechtstreeks in verbinding met alle delen van het zenuwstelsel.',
      why4: 'Zo wordt het mogelijk om diep opgeslagen ervaringen integraal te bereiken en nieuwe verbindingen te laten ontstaan, in veiligheid.',
      brainspottingTitle: 'Brainspotting',
      brainspotting1: 'Brainspotting is een ongekend krachtige methode om alles wat belemmert in functioneren en groei, fundamenteel op te lossen door de onderliggende neurofysiologische bronnen te vinden en te verwerken: de fysieke weerslag van alles wat eerder niet verwerkt kon worden en daardoor nog in het lichaam zit. Door precieze aansluiting op de autonome oogreflexen en wat er in je lichaam gebeurt, worden deze onderliggende bronnen van klachten en beperkingen weer betrokken in het lichaamseigen proces van regulatie, heling en groei. Zo blijft het je leven lang doorwerken.',
      brainspotting2: 'Brainspotting is ontwikkeld uit EMDR, de meest gebruikte evidence-based traumatherapie. Een principieel verschil met EMDR is dat je je bij Brainspotting richt op wat je in het moment in je lichaam ervaart en dat blijft volgen, in plaats van op een specifiek beeld van een trauma. Door je ervaringen van moment tot moment te volgen, ben je altijd altijd precies bij de kern en komt alles wat er mee verbonden is vanzelf op. Een ander belangrijk verschil met EMDR is dat Brainspotting puur gericht is op het creëeren van de omstandigheden waaronder het lichaamseigen proces van verwerking weer op gang komt en het nauwgezet volgen wat er gebeurt; er vindt geen sturing plaats zoals bij EMDR. In het lichaamseigen proces lopen regulatie, heling en groei vanzelf in elkaar over, zodat met het oplossen van klachten tegelijkertijd fundamentele ontwikkeling, prestatieverbetering en betere verbinding met jezelf en de mensen om je heen ontstaan.',
      istdpTitle: 'ISTDP',
      istdp1: 'De combinatie met ISTDP biedt onmiskenbare, liefdevolle helderheid over de onbewuste, vaak krachtige en hardnekkige patronen waarmee gevoel wordt weggemaakt, waardoor deze niet langer in de weg zitten, maar juist de weg wijzen naar verwerking, heling en groei. ISTDP (Intensive Short-Term Dynamic Psychotherapy) is een gespecialiseerde vorm van evidence-based psychotherapie. Ik ben geen psycholoog of psychotherapeut - mijn expertise is verwerking met alles wat dat in de weg zit - maar heb mogen leren van Steven Shapiro en Patricia Coughlin, twee van de meest vooraanstaande ISTDP-opleiders van dit moment.',
      istdp2: 'Wat ik ervan gebruik is de onmiskenbare helderheid over het grotendeels onbewuste proces van emotieregulatie: hoe het lichaam alles wat niet verwerkt kan worden "wegmaakt", hoe weggemaakt gevoel zich uit in spanning, angst of paniek en hoe die spanning, angst of paniek vervolgens ook uit het bewustzijn wordt weggehouden met patronen als niet voelen, afreageren, verslaving etcetera. Net zolang tot er wel verwerking mogelijk is: als je er bij kan èn de omstandigheden voor verwerking aanwezig zijn. Wanneer je dit proces van emotieregulatie begrijpt, word je je bewust van je eigen patronen om gevoelens weg te houden, waardoor dat weghouden niet meer werkt en je er bij kan. En als je er bij kan, kan je met Brainspotting op een gedoseerde manier verwerken. ISTDP kan heel confronterend zijn, maar door deze combinatie met Brainspotting is dat niet het geval. Een andere liefdevolle manier om met ISTDP en Brainspotting te werken is ieder patroon dat gevoel wegmaakt in een vergelijking als een klein kind te zien, dat kennelijk ooit in omstandigheden was waarin het niet anders kon dan te doen wat het doet: gevoel uitschakelen, jezelf de schuld geven, alles wat het doet om niet te voelen. Vanuit de wetenschap dat alles wat niet helpend is, kennelijk ooit noodzakelijk was als overleving, is ieder patroon een afdruk van hoe het ooit was, en kunnen we erbij zijn om te verwerken.',
      performanceTitle: 'Prestatieverbetering',
      performance: 'De combinatie Brainspotting + ISTDP is ook bijzonder effectief voor fundamentele prestatieverbetering en expansie van creativiteit, bijvoorbeeld in topsport, muziek of andere topprestaties. Beide technieken kunnen uitstekend online worden toegepast.',
      reference: 'Meer informatie over brainspotting en gepubliceerd onderzoek over de effectiviteit zijn het beste te vinden op'
    },
    EN: {
      title: 'Brainspotting + ISTDP',
      whyTitle: 'Why Brainspotting?',
      why1: 'It\'s becoming increasingly clear that the impact of unprocessed experiences is stored throughout the entire nervous system.',
      why2: 'To truly heal, all parts of the nervous system need to be reached and involved.',
      why3: 'Brainspotting makes this possible by using the unique entry point of the eyes. The eyes - deeply involved in perception, orientation, safety, and attachment - are literally an extension of the brain and connect directly to all parts of the nervous system.',
      why4: 'This allows deeply stored experiences to be accessed in an integrated way, creating new connections and pathways for healing, safely and at the depth where it matters most.',
      brainspottingTitle: 'Brainspotting',
      brainspotting1: 'Brainspotting is an extraordinarily powerful method to resolve what limits your functioning and growth by locating and processing the underlying neuro-physiological sources: the physical imprint of what could not be processed earlier and therefore remains held in the body. By precisely attuning to autonomic eye-reflex positions and to what is happening inside your body in the moment, these underlying sources of symptoms and restrictions are re-engaged in the body\'s natural proces of regulation, healing and growth. The effects continue to render throughout life.',
      brainspotting2: 'Brainspotting has developed out of EMDR, the most widely used evidence-based trauma therapy. A fundamental difference from EMDR is that Brainspotting focuses on what you are experiencing in your body in the moment and follows that experience, rather than focusing on a specific traumatic image. By tracking moment-to-moment experience you are always exactly at the core of the issue and everything associated with it emerges naturally. Another important difference is that Brainspotting is aimed at creating the conditions under which the body\'s own processing restarts and letting it unfold in attentively attuned awareness; there is no directed intervention as in EMDR. In the self-organizing bodily process, regulation, healing and growth naturally flow together, so resolving symptoms simultaneously produces fundamental development, performance enhancement and better connection with yourself and others.',
      istdpTitle: 'ISTDP',
      istdp1: 'The combination with ISTDP brings inescapable, compassionate clarity about the unconscious, often powerful and persistent patterns that suppress feeling - patterns that, once understood, no longer hinder but instead lead the way to healing and growth. ISTDP (Intensive Short-Term Dynamic Psychotherapy) is a specialized, evidence-based psychotherapeutic approach. I am not a psychologist or psychotherapist but I have trained with Steven Shapiro and Patricia Coughlin, two leading ISTDP instructors. My expertise is creating the circumstances in which the natural physical proces of regulation, healing and growth starts again, including the fundamental resolution of everything that hinders that.',
      istdp2: 'What I draw from ISTDP is a precise and unescapable understanding of the largely unconscious process of emotion regulation: how the body "discharges" or suppresses what cannot be processed, how suppressed feelings appear as tension, anxiety or panic, and how that tension or anxiety is then kept out of awareness by patterns such as emotional avoidance, acting out or addiction - until the time is right to finally be able to process them. This understanding makes you aware of your own patterns of keeping feelings away and with that awareness (of what you do to not be aware) the suppressed feelings shine through and are within reach of the body to heal. From there Brainspotting allows for paced processing, because it can straight away regulate the intensity of the experience. ISTDP can be intense, but combined with Brainspotting it is compassionate and manageable. Another gentle way to work with the combination is to imagine each defensive pattern as a small child who apparently once had to do whatever it still does in order to survive, such as switch off the feelings, take the blame, whatever avoids feeling. Knowing that these defenses were once adaptive and necessary allows us to be with them with compassion and process safely.',
      performanceTitle: 'Performance Enhancement',
      performance: 'The Brainspotting + ISTDP combination is also especially effective for deep performance enhancement and expansion of creativity, for example in top sport, music and peak performance on other domains. Both methods work very well online.',
      reference: 'The best source for more information about Brainspotting and published research on its effectiveness is'
    }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="brainspotting-page">
        <div className="page-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="brainspotting-highlight">
            <h2 className="section-heading">{t.whyTitle}</h2>
            <p className="section-text">{t.why1}</p>
            <p className="section-text">{t.why2}</p>
            <p className="section-text">{t.why3}</p>
            <p className="section-text">{t.why4}</p>
          </div>

          <h2 className="section-heading">{t.brainspottingTitle}</h2>
          <p className="section-text">{t.brainspotting1}</p>
          <p className="section-text">{t.brainspotting2}</p>

          <h2 className="section-heading">{t.istdpTitle}</h2>
          <p className="section-text">{t.istdp1}</p>
          <p className="section-text">{t.istdp2}</p>

          <h2 className="section-heading">{t.performanceTitle}</h2>
          <p className="section-text">{t.performance}</p>

          <p className="reference-note">
            {t.reference}{' '}
            <a href="https://www.brainspotting.com" target="_blank" rel="noopener noreferrer" className="external-link">
              www.brainspotting.com
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Brainspotting
