import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import '../styles/Brainspotting.css'

function Brainspotting() {
  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="brainspotting-page">
        <div className="page-container">
          <h1 className="page-title">Brainspotting + ISTDP</h1>
          
          <h2 className="section-heading">Waarom Brainspotting werkt</h2>
          <p className="section-text">
            Het wordt steeds duidelijker dat de impact van onverwerkte ervaringen in alle delen van 
            het zenuwstelsel ligt opgeslagen.
          </p>
          <p className="section-text">
            Om volledig te kunnen helen, moeten daarom álle delen van het zenuwstelsel worden bereikt.
          </p>
          <p className="section-text">
            Met Brainspotting gebeurt dat, doordat het gebruikt maakt unieke ingang van de ogen. De 
            ogen - betrokken bij waarneming, oriëntatie, (on)veiligheid en hechting - zijn letterlijk 
            een uitstulping van het brein, en staan rechtstreeks in verbinding met alle delen van het 
            zenuwstelsel.
          </p>
          <p className="section-text">
            Zo wordt het mogelijk om diep opgeslagen ervaringen integraal te bereiken en nieuwe 
            verbindingen te laten ontstaan, in veiligheid.
          </p>

          <h2 className="section-heading">Brainspotting</h2>
          <p className="section-text">
            Brainspotting is een ongekend krachtige methode om alles wat belemmert in functioneren en 
            groei, fundamenteel op te lossen door de onderliggende neurofysiologische bronnen te vinden 
            en te verwerken: de fysieke weerslag van alles wat eerder niet verwerkt kon worden en 
            daardoor nog in het lichaam zit. Door precieze aansluiting op de autonome oogreflexen en 
            wat er in je lichaam gebeurt, worden deze onderliggende bronnen van klachten en beperkingen 
            weer betrokken in het lichaamseigen proces van regulatie, heling en groei. Zo blijft het je 
            leven lang doorwerken.
          </p>
          <p className="section-text">
            Brainspotting is ontwikkeld uit EMDR, de meest gebruikte evidence-based traumatherapie. Een 
            principieel verschil met EMDR is dat je je bij Brainspotting richt op wat je in het moment 
            in je lichaam ervaart en dat blijft volgen, in plaats van op een specifiek beeld van een 
            trauma. Door je ervaringen van moment tot moment te volgen, ben je altijd altijd precies bij 
            de kern en komt alles wat er mee verbonden is vanzelf op. Een ander belangrijk verschil met 
            EMDR is dat Brainspotting puur gericht is op het creëeren van de omstandigheden waaronder het 
            lichaamseigen proces van verwerking weer op gang komt en het nauwgezet volgen wat er gebeurt; 
            er vindt geen sturing plaats zoals bij EMDR. In het lichaamseigen proces lopen regulatie, 
            heling en groei vanzelf in elkaar over, zodat met het oplossen van klachten tegelijkertijd 
            fundamentele ontwikkeling, prestatieverbetering en betere verbinding met jezelf en de mensen 
            om je heen ontstaan.
          </p>

          <h2 className="section-heading">ISTDP</h2>
          <p className="section-text">
            De combinatie met ISTDP biedt onmiskenbare, liefdevolle helderheid over de onbewuste, vaak 
            krachtige en hardnekkige patronen waarmee gevoel wordt weggemaakt, waardoor deze niet langer 
            in de weg zitten, maar juist de weg wijzen naar verwerking, heling en groei. ISTDP (Intensive 
            Short-Term Dynamic Psychotherapy) is een gespecialiseerde vorm van evidence-based psychotherapie. 
            Ik ben geen psycholoog of psychotherapeut - mijn expertise is verwerking met alles wat dat in 
            de weg zit - maar heb mogen leren van Steven Shapiro en Patricia Coughlin, twee van de meest 
            vooraanstaande ISTDP-opleiders van dit moment.
          </p>
          <p className="section-text">
            Wat ik ervan gebruik is de onmiskenbare helderheid over het grotendeels onbewuste proces van 
            emotieregulatie: hoe het lichaam alles wat niet verwerkt kan worden "wegmaakt", hoe weggemaakt 
            gevoel zich uit in spanning, angst of paniek en hoe die spanning, angst of paniek vervolgens 
            ook uit het bewustzijn wordt weggehouden met patronen als niet voelen, afreageren, verslaving 
            etcetera. Net zolang tot er wel verwerking mogelijk is: als je er bij kan èn de omstandigheden 
            voor verwerking aanwezig zijn. Wanneer je dit proces van emotieregulatie begrijpt, word je je 
            bewust van je eigen patronen om gevoelens weg te houden, waardoor dat weghouden niet meer werkt 
            en je er bij kan. En als je er bij kan, kan je met Brainspotting op een gedoseerde manier 
            verwerken. ISTDP kan heel confronterend zijn, maar door deze combinatie met Brainspotting is 
            dat niet het geval. Een andere liefdevolle manier om met ISTDP en Brainspotting te werken is 
            ieder patroon dat gevoel wegmaakt in een vergelijking als een klein kind te zien, dat kennelijk 
            ooit in omstandigheden was waarin het niet anders kon dan te doen wat het doet: gevoel 
            uitschakelen, jezelf de schuld geven, alles wat het doet om niet te voelen. Vanuit de wetenschap 
            dat alles wat niet helpend is, kennelijk ooit noodzakelijk was als overleving, is ieder patroon 
            een afdruk van hoe het ooit was, en kunnen we erbij zijn om te verwerken.
          </p>

          <h2 className="section-heading">Prestatieverbetering</h2>
          <p className="section-text">
            De combinatie Brainspotting + ISTDP is ook bijzonder effectief voor fundamentele prestatieverbetering 
            en expansie van creativiteit, bijvoorbeeld in topsport, muziek of andere topprestaties. Beide 
            technieken kunnen uitstekend online worden toegepast.
          </p>

          <p className="reference-note">
            Meer informatie over brainspotting en gepubliceerd onderzoek over de effectiviteit zijn het beste 
            te vinden op{' '}
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
