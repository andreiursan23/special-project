import { useState, useEffect } from "react";
import "./App.css";

const story = [
  {
    subtitle: "Capitolul I - Primii pasi timizi",
    image: "/2009/2009-1.jpg",
    imgText:
      'In primul an de liceu, chiar daca abia incepeam sa ne cunoastem, existau semne clare ca eram deja "de nedespartit". Bine, eram cu spatele, dar cat de greu ar fi fost sa ma intorc cu fata pentru poza asta? 😂',
  },
  {
    subtitle: "Capitolul I - Primii pasi timizi",
    image: "/2010/2010-1.jpg",
    imgText:
      'Prima noastra petrecere si, chiar daca nu eram impreuna, incepeam deja sa imi spun "Hmmm, cred ca incepe sa imi placa Dana, vreau sa o cunosc". Se pare ca am simtit ceva, nu? 🤔',
  },
  {
    subtitle: "Capitolul I - Primii pasi timizi",
    image: "/2010/2010-2.jpg",
    imgText:
      "Cine ar fi crezut ca poza ca asta (si aici ma refer la poza impreuna, nu cringey, cu toate ca ne pricepem si la alea 😂) o sa tot facem in urmatorii 12 ani? 💖",
  },
  {
    subtitle: "Capitolul II - Inceputul nostru",
    image: "/2010/2010-3.jpg",
    imgText:
      'Si prima noastra poza ca si cuplu. 💖 Fata ta parca spune "in sfarsit si-a facut curaj si a intrebat, uhuuuu", iar pe a mea se vede clar "OMG, nu-mi vine sa cred ca am facut asta, that was hard". 😂',
  },
  {
    subtitle: "Capitolul II - Inceputul nostru",
    image: "/2010/2010-4.jpg",
    imgText:
      "Acum prima noastra poza normala ca si cuplu. 💖 Imi amintesc si acum ce emotii aveam cand, dupa atata asteptare, impartaseam primele gesturi de tandrete, primele atingeri, primele saruturi. 💏",
  },
  {
    subtitle: "Capitolul II - Inceputul nostru",
    image: "/2010/2010-5.jpg",
    imgText:
      'Se vedea din privirile noastre, din sacoul dat ca sa ma asigur ca nu iti este frig, cat de mult ne dorisem acest prim pas. 👀 In mintea mea inca era "Sigur nu visez?". 😍',
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2010/2010-6.jpg",
    imgText:
      'Si asa a inceput primul nostru an impreuna. 💖 Chiar daca eram la liceu, unde ar fi trebuit sa invatam, pauza era "us time". 🤗',
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2011/2011-1.jpg",
    imgText:
      "Prima noastra excursie impreuna. 💖 O fi oare intamplator ca se numea Himalaya cabana? Sau era un indiciu ca o sa urmeze un drum plin de provocari, dar care o sa ne aduca atat de multe impliniri? 😍",
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2011/2011-2.jpg",
    imgText:
      "Prima cabana din Pini impreuna. 💖 Am petrecut mult timp in Pini la inceputul relatiei noastre, nu? 😂",
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2011/2011-3.jpg",
    imgText:
      'Primele cabana de la legendarul Gogu impreuna. 💖 Matching T-shirts. Probabil toata lumea se gandea "Please get a room". 😂',
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2011/2011-4.jpg",
    imgText:
      'Prima piscina impreuna. 💖 Iarasi matching stuff. 😂 Remember XOXO din primele noastre conversatii "de pe mess"?',
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2011/2011-5.jpg",
    imgText:
      'Prima noastra excursie impreuna. 💖 (fara profesori sau adulti 😂) Remember Mr. Bean si "meshum meshum meshum"? Ma topeam de fiecare data cand faceai asa. 🥰',
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2012/2012-1.jpg",
    imgText:
      "Prima excursie cu familia impreuna. 💖 Pe vremea cand Bodo facea pe inabordabilul si imi era frica de el. 😂",
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2012/2012-2.jpg",
    imgText:
      "Prima poza cu ai tai. 💖 In povestile cu pirati comorile sunt ingropate la mare adancime, dar aici am gasit o comoara abia ingropata. 😂",
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2012/2012-3.jpg",
    imgText:
      'Prima data cand gateam impreuna. 💖 O fi intamplator ca am gatit direct "ceva bun"? 😂',
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2012/2012-4.jpg",
    imgText:
      "Primul nostru concert impreuna. 💖 Ai fi crezut atunci ca Jessie J n-o sa mai fie celebra in acelasi timp in care noi vom fi tot impreuna? 😂",
  },
  {
    subtitle: "Capitolul III - Our firsts",
    image: "/2012/2012-5.jpg",
    imgText:
      "Primul nostru Craciun impreuna. 💖 De atunci te-am impresionat cu vocea mea, pe care am avut ocazia sa o etalez la colindat. 😂",
  },
  {
    subtitle: "Capitolul IV - Am crescut in doi",
    image: "/majorat-3.jpg",
    imgText:
      "Ne-am distrat la toate majoratele posibile, care au fost foarte multe. 💖 Mai tii minte pozele noastre boho? 😂",
  },
  {
    subtitle: "Capitolul IV - Am crescut in doi",
    image: "/majorat-noi.jpg",
    imgText:
      "Dar cel mai mult ne-am distrat la majoratele noastre. 💖 Pana si primul pas inspre maturitate l-am facut impreuna. 😍",
  },
  {
    subtitle: "Capitolul IV - Am crescut in doi",
    image: "/spital-noi.jpg",
    imgText:
      "Revenind la lucruri mai serioase, avem in poza asta doi viitori doctori: tu si probabil cineva din spatele meu. 😂",
  },
  {
    subtitle: "Capitolul IV - Am crescut in doi",
    image: "/banchet-noi.jpg",
    imgText:
      "Si liceul l-am incheiat aproape cum l-am inceput, adica impreuna 💖 (eh, clasa a 9-a a fost asa, mai mult de adaptare, deci nu o numaram 😂).",
  },
  {
    subtitle: "Capitolul IV - Am crescut in doi",
    image: "/anul-1-noi.jpg",
    imgText:
      "Si chiar daca inceputul facultatii a fost o perioada in care fiecare a avut de invatat lucruri pe cont propriu ...",
  },
  {
    subtitle: "Capitolul IV - Am crescut in doi",
    image: "/noi-golf-facultate.jpg",
    imgText:
      "In continuare am fost ca doi magneti, care atunci cand se apropiau mai mult, se atrageau din nou. 💖 Also, trebuia si o poza din masina, la cat de mult am petrecut impreuna in ea. 😂",
  },
  {
    subtitle: "Capitolul V - Inapoi impreuna",
    image: "/noi-oslo.jpg",
    imgText:
      "Dar a fost doar o chestiune de timp (si ceva nervi, pe alocuri lacrimi, dar care au meritat), pana cand am fost din nou impreuna. 💖",
  },
  {
    subtitle: "Capitolul V - Inapoi impreuna",
    image: "/absolvire-eu.jpg",
    imgText:
      "Si din nou am fost unul langa celalalt in momentele importante din viata noastra. 💖 Nu in fiecare zi faci U(n)P(as)G(resit) si il si duci la bun sfarsit. 😂",
  },
  {
    subtitle: "Capitolul V - Inapoi impreuna",
    image: "/absolvire-dana.jpg",
    imgText:
      'Am celebrat si pasii "controversati", dar mai ales pe cei buni. 💖 Si sa ma simt putin medic, mi-ai oferit cateva minute medalia ta. 😂',
  },
  {
    subtitle: "Capitolul V - Inapoi impreuna",
    image: "/emilut.jpg",
    imgText:
      'Si uite asa am ajuns sa avem si prima noastra casuta impreuna. 💖 ',
  },
  {
    subtitle: "Capitolul V - Our journeys 🛫",
    image: "/noi-roma.jpg",
    imgText:
      "In noua noastra etapa am inceput sa calatorim in lume impreuna. 🌍 Si chiar daca am cam alergat prin Roma, nu cred ca o sa uitam prima carbonara adevarata. 😂🍝",
  },
];

function App() {
  const [storyStep, setStoryStep] = useState(0);

  const [subtitle, setSubtitle] = useState(story[storyStep].subtitle);
  const [image, setImage] = useState(story[storyStep].image);
  const [imgText, setImgText] = useState(story[storyStep].imgText);

  useEffect(() => {
    setSubtitle(story[storyStep].subtitle);
    setImage(story[storyStep].image);
    setImgText(story[storyStep].imgText);
  }, [storyStep]);

  const previousStory = () => {
    setStoryStep(storyStep - 1);
  };

  const nextStory = () => {
    setStoryStep(storyStep + 1);
  };

  return (
    <div className="main-container">
      <header>
        <h1 className="title">
          Calatoria noastra printre stele <span className="heart">💖</span>
        </h1>
      </header>

      <main>
        <h2 className="subtitle">
          <span className="red-square">◻</span> {subtitle}{" "}
          <span className="red-square">◻</span>
        </h2>

        <section className="photo-section">
          <div className="btn-container">
            <button
              onClick={previousStory}
              disabled={storyStep === 0 ? true : false}
            >
              <span className="arrow">◀</span> Stai, de unde am plecat?
            </button>
          </div>

          <div>
            <figure>
              <img src={image} height={600} />
              <div className="img-text">
                <figcaption>{imgText}</figcaption>
              </div>
            </figure>
          </div>

          <div className="btn-container">
            <button
              onClick={nextStory}
              disabled={storyStep === story.length - 1 ? true : false}
            >
              Hai la urmatoarea, nu? <span className="arrow">▶</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
