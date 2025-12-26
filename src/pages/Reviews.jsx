import React from 'react'
import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import { useLanguage } from '../contexts/LanguageContext'
import '../styles/Reviews.css'

function Reviews() {
  const { language } = useLanguage()
  
  const reviewsNL = [
    {
      id: 1,
      text: "Een vriendin verwees me naar Irene. Ik wist tevoren niets over de methode. Irene begeleidt je veilig naar je pijnpunten. Ik heb ontdekt dat het voor een doorbraak nodig is om daarheen te gaan. En er enige tijd te blijven. Dat is moeilijk, maar je bent niet alleen. Irene is erbij en kan snel helpen doseren als het teveel wordt. De behandeling heeft nauwelijks woorden nodig. Dat vond ik een verademing, want de kunst is juist \"onder\" de woorden en gedachten te komen. Na ongeveer 7 behandelingen van 1,5 uur voelde ik me een stuk beter."
    },
    {
      id: 2,
      text: "De sessies met Irene hebben me inzichten gegeven in de diepere lagen van mij; mijn verdriet én geluk. Daar waar ik eerder een heldin was in het wegmaken van pijn en onverwerkt trauma, ontdek ik nu een manier die zorgt dat ik opgeslagen spanning wél zie, voel en ruimte durf te geven. Nu minder bezig zijn met het hoofd, wat altijd het gevaar van projectie, aannames en wegdenken met zich meebrengt. Veel meer luisteren naar de diepste lagen, opgeslagen in mijn eigen lijf. Ik hoef het alleen maar ruimte te geven om de spanning zelf op te lossen. En dat maakt dat ik nu ook geluk meer kans geef, want ook dát is een lading. Hoeveel geluk durf je aan? ☺️ Voor mij is het een nieuwe vorm van communicatie met mijzelf. Ik sta weer náást in plaats van tegenover mezelf. Zoveel liever, zoveel fijner!"
    },
    {
      id: 3,
      text: "Via via hoorde ik over Brainspotting en Irene. Met name het feit dat je niet met specifieke  herinneringen aan de slag gaat, sprak me aan omdat daar een deel van mijn problematiek zit. Het waren heel bijzondere sessies. Het was een mooie ontdekkingsreis door mijn gevoel, waarbij mn lichaam zelf steeds wist waar het moest zijn. Stil en diep verdriet mocht worden losgelaten. De voornaamste reden voor behandeling was een heftige ziekteangst die veel invloed op mijn leven had. De sessies lijken me hiermee te hebben geholpen. Ik voel duidelijk meer rust in mijzelf. Zodanig dat ik me nu met mijn psychiater klaar voel jarenlange medicatie rustig  af te bouwen. Ik heb Irene ervaren als een zeer bekwame, prettige en integere therapeut. Als ik in de toekomst nog eens ondersteuning kan gebruiken, volg ik zeker weer dit pad."
    },
    {
      id: 4,
      text: "Irene heeft mij ontzettend goed geholpen. Ik worstelde al jaren met een diep trauma in combinatie met meerdere dingen in mijn leven die gebeurd zijn die ervoor gezorgd hebben dat ik me altijd innerlijk verscheurd voelde en nooit wist wat ik wilde. Zij heeft mij met meerdere sessies geholpen om alle blokkades waar ik mee kampte op te ruimen, als enige van alle mensen waar ik mee heb gewerkt. Het proces met Irene en brainspotting is ontzettend diepgaand en je komt echt tot de absolute kern. Ik had voordat ik bij Irene kwam lichtelijk de hoop opgegeven, omdat ik al zoveel verschillende therapieën had geprobeerd en alles wel hielp, maar er altijd 'iets' bleef hangen. Met Irene is het gelukt echt alles op te ruimen. Ik voel me energieker, vrijer en gelukkiger dan ik ooit ben geweest en mijn levenspad is weer helder. Irene haar kracht is haar sensitiviteit, opmerkzaamheid en de mate van diepgang in haar sessies waardoor je echt tot de kern komt. Het fijne is dat je niet hoeft te praten als je niet wil, wat ook voor de introvertere of verlegenere mensen fijn is, omdat brainspotting een fysiek proces is en het het zelforganiserend en -helend vermogen van het lichaam op gang zet waar deze geblokkeerd is waardoor de sessies doorwerken en het niet stopt bij enkel de sessie waar je aanwezig bij haar bent. Ik raad Irene ten zeerste aan voor iedereen die ergens mee kampt, van de verwerking van trauma's, tot aan een heleboel scala aan klachten en zelfs bij het verbeteren van (top)prestaties."
    },
    {
      id: 5,
      text: "Ik vond het erg fijn om met Irene te werken aan mijn stukken en merkte na elke sessie wel een verschuiving. Soms groot, soms kleiner. Dat ik me vrijer voelde, minder beladen, dichter bij mijn kern of dat ik mezelf bijvoorbeeld verraste met de gedachte 'oh, hier zou ik het mezelf voorheen een stuk moeilijker gemaakt hebben!'. Oude patronen die als sneeuw voor de zon verdwenen. Irene is erg scherp op alles wat er is en neemt alles mee in het proces — ook de dingen die ik tussen neus en lippen door benoemde. Soms confronterend, maar altijd op een zachte manier. Als spiegel, zonder oordeel. Wanneer ik intuïtief richting wilde bepalen volgde ze mij, en wanneer ik behoefte had aan sturing of geruststelling was ze er met onverdeelde aandacht. Haar liefdevolle, intuïtieve en tegelijkertijd praktische benadering zijn ontzettend waardevol geweest. (Artiest)."
    },
    {
      id: 6,
      text: "Lieve Irene, Ik begon mijn reis bij jou omdat ik constant angst voelde. Voor verandering, voor mezelf en voor de meningen van anderen. Ik voelde dat dit mij in alles tegenhield en het belemmerde mij dagelijks. Eerst vond ik brainspotting online. Zonder het te snappen voelde ik dat dit was wat mij verder kon helpen. Ik zocht verder op brainspotting en hoogbegaafdheid, omdat ik iemand zocht die mijn manier van denken bij kan houden. Ik vond jou online, voelde de klik en wist dat ik met jou deze reis ging maken. Ondanks dat brainspotting een reis is zonder duidelijke bestemming waarin je alles los moet laten om daar te komen waar je wilt zijn. Ik ben zonder angst, wél met spanning, maar ook een flinke dosis nieuwsgierigheid, aan deze reis begonnen omdat ik me vanaf het eerste gesprek veilig bij jou voelde. Op mijn gemak. Mezelf. Ik begon aan een ontdekkingstocht door diepe dalen en langs hoge pieken. Het voelde alsof ik droomde en alsof ik door zware nachtmerries heen moest. Waarbij ik sprookjesachtige jungles vol watervallen, glinsterende zeeën en donkere golven heb gezien vol woeste stormen, zwaarte en tranen. Brainspotting met jou heeft mij geholpen om mijn houvast aan mijn angst los te laten en mijn innerlijke kracht te voelen en dáár naar te luisteren. Jij hebt met mij meegereisd als mijn veilige rots in de branding. Waar ik ook naartoe ging, jij was daar waardoor ik er doorheen kwam en durfde te voelen om het los te kunnen laten. Waarna ik ook durf te voelen waar het naartoe kan gaan. Toen ik bij je kwam was ik bang voor mijn eigen kracht omdat ik nooit heb geleerd hoe mooi die eigenlijk is. Nu voel ik hoe mooi mijn kracht is waarmee ik de wereld een stukje mooier kan maken als ik mij niet meer klein laat maken door de harde stemmen van mijn verleden. Mijn lichaam voelt een stukje heler. Rustiger. Vertrouwd. Tijdens onze sessies heb jij mij geholpen een kerngevoel te vinden waarop ik altijd kan terugvallen om weer in die kracht te komen. Een boom met sterke wortels, dansend in de wind en kijkend naar het noorderlicht die luistert naar de wijze woorden van mijn innerlijke kind. Want zoals jij keer op keer zei: een kind wijst je de weg. Dank je wel lieve Irene voor je begeleiding, de rust die jij uitstraalt, het vertrouwen wat jij geeft en de kracht die jij hebt om met mij deze reis te laten maken. Jij hebt een gave en die zet je zo mooi in. Ik ben er intens dankbaar voor dat ik jouw website tegenkwam, mijn gevoel ben gevolgd en jou heb gemaild. Want in een korte maar zeer intense periode voel ik me krachtiger, sterker en zelfverzekerder dan ik me ooit heb gevoeld. Met tranen in mijn ogen van dankbaarheid schrijf ik dit naar je. Trots dat ik dit heb gedaan en dankbaar dat ik jou heb gevonden. Voor nu neem ik de tijd om te gaan voelen waar mij dit gaat brengen. En ik voel dat je op een later moment weer aanhaakt, als ik ben voor de volgende reis. En voor iedereen die nadenkt over brainspotting, erover twijfelt, de stap wil zetten maar nog niet durft? Laat het los, ga het doen en laat je verwonderen door de reis die je gaat maken met Irene als reisgenoot. Geloof mij maar, het is het waard. "
    }
  ]

  const reviewsEN = [
    {
      id: 1,
      text: "A friend referred me to Irene, and I knew nothing about the method beforehand. Irene guides you safely to the places where it hurts. I discovered that a real breakthrough requires going there — and staying there for a while. That's difficult, but you're not alone. Irene is right there with you and can quickly help you pace things when it becomes overwhelming. The treatment requires hardly any words, which I found refreshing; the real work happens beneath the words and thoughts. After about seven sessions of 1.5 hours, I felt significantly better."
    },
    {
      id: 2,
      text: "The sessions with Irene have given me insights into the deeper layers of myself—both my sorrow and my joy. Where I once was an expert at pushing away pain and unresolved trauma, I am now discovering a way that allows me to see, feel, and give space to the tension stored inside me. It means being less caught up in my head—with all the risks of projecting, assuming, and thinking things away—and instead listening more closely to the deepest layers stored in my body. All I need to do is give them space, and the tension begins to resolve itself. That also means I'm giving joy more room, because joy, too, carries activation. How much joy are you willing to let in? ☺️ For me, this feels like a new way of communicating with myself. I now stand beside myself, instead of opposite myself. So much kinder, so much better."
    },
    {
      id: 3,
      text: "I heard about Brainspotting and Irene through word of mouth. What particularly appealed to me was the fact that you do not work with specific memories, as that is exactly where part of my difficulties lies. The sessions were very special. They felt like a beautiful journey of discovery through my inner world, during which my body appeared to know intuitively where it needed to be. Silent and deep sadness was finally able to be released. The main reason for seeking treatment was a severe health anxiety that had a major impact on my life. The sessions seem to have helped me greatly. I clearly feel more inner calm - to such an extent that I now feel ready, together with my psychiatrist, to gradually taper off medication that I have used for many years. I experienced Irene as a highly skilled, compassionate therapist with great integrity. If I could ever use support again in the future, I will certainly choose this path again."
    },
    {
      id: 4,
      text: "Irene helped me enormously. I'd struggled for years with deep trauma and many life events that left me feeling torn and not knowing what I wanted. Through multiple sessions she cleared the blockages in a way no one else could. The process with Irene and Brainspotting was profoundly deep and reached the absolute core. I had nearly given up hope after many therapies, but with Irene everything was cleared. I feel more energetic, freer and happier than ever. Her strengths are sensitivity, attentiveness and depth in sessions. You don't have to talk if you don't want to - Brainspotting is a physical process that activates the body's self-organizing and healing capacities so the effects continue beyond the session. I highly recommend Irene."
    },
    {
      id: 5,
      text: "I found working with Irene very valuable: after each session I noticed shifts - sometimes big, sometimes small - more freedom, less burden, closer to my core. Old patterns disappeared like snow in the sun. Irene is sharp and takes everything into the process - even things I mentioned in passing. Sometimes confronting, always gentle. Her loving, intuitive and practical approach has been invaluable."
    },
    {
      id: 6,
      text: "Dear Irene, I began my journey with you because I constantly felt fear. Fear of change, fear of myself, fear of other people's opinions. I felt it was holding me back in everything and limiting me every single day. I first came across Brainspotting online. Without really understanding it, I felt this was what could help me move forward. I started looking specifically for Brainspotting and giftedness, because I wanted someone who could keep up with my way of thinking. I found you online, felt an instant connection, and knew I was going to take this journey with you. Even though Brainspotting is a journey without a clear destination—one where you have to let go completely to arrive where you want to be—I began, not without tension, but without fear, and with a healthy dose of curiosity, because from our very first conversation I felt safe with you. At ease. Myself. I embarked on an exploration through deep valleys and high peaks. It felt like dreaming and also like having to pass through heavy nightmares. I've seen fairytale-like jungles with waterfalls, shimmering seas and dark waves full of storms, heaviness, and tears. Brainspotting with you has helped me let go of my grip on fear, feel my inner strength, and listen to it. You have travelled with me as my safe rock in the surf. Wherever I went, you were there, helping me through, encouraging me to feel so that I could release it—and then also to dare to feel where it might lead. When I first came to you, I was afraid of my own strength because I had never learned how beautiful it really is. Now I feel how beautiful my strength is, and how it can make the world a little better when I no longer let the harsh voices of my past make me small. My body feels a little more whole. Calmer. Familiar. During our sessions you helped me find a core feeling I can always return to, to reconnect with my strength: a tree with deep roots, dancing in the wind, gazing at the northern lights, listening to the wise words of my inner child. Because, as you said time and again, \"a child shows you the way.\" Thank you, dear Irene, for your guidance, the calm you radiate, the trust you offer, and the strength you have to accompany me on this journey. You have a gift, and you use it so beautifully. I am deeply grateful that I found your website, trusted my intuition, and reached out to you. In a short but very intense period I now feel stronger, more powerful, and more confident than I ever have. With tears of gratitude in my eyes, I write this to you—proud of what I've done and grateful that I found you. For now, I'll take the time to feel where this will lead me. And I sense that at some point you'll rejoin me, when I'm ready for the next journey. And for anyone who is thinking about Brainspotting, hesitating, wanting to take the step but not daring yet: let go, go for it, and allow yourself to be amazed by the journey you will take with Irene as your companion. Believe me, it's worth it. With love."
    }
  ]

  const reviews = language === 'EN' ? reviewsEN : reviewsNL
  const translations = {
    NL: { title: 'Reviews', intro: 'Ervaringen van mensen die met mij hebben gewerkt aan hun ontwikkeling en heling.' },
    EN: { title: 'Reviews', intro: 'Ervaringen van mensen die met mij hebben gewerkt aan hun ontwikkeling en heling.' }
  }

  const t = translations[language]

  return (
    <div className="page">
      <Navigation />
      <Banner />
      
      <section className="reviews-page">
        <div className="page-container">
          <h1 className="page-title">{t.title}</h1>
          
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <p className="review-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Reviews

