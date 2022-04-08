import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

import "./style.css";

import instagram from '../../assets/instagram-icon.svg';
import whatsapp from '../../assets/whatsapp-icon.svg';
import gmail from '../../assets/gmail-icon.svg';
import cam from '../../assets/cam-img.jpg';
import lamp from '../../assets/lamp-icon.png';

function Home() {

  return (
    <>
      <div className="page">
        <Navbar />
        <div className="home">
          <div className="brand-text">
            <h2>Agência</h2>
            <h1>incomum</h1>
            <h3>Transformando a realidade através da educação digital.</h3>
          </div>
          <div className="social-media">
            <a href="#"><img src={instagram} alt="Instagram" /></a>
            <a href="#"><img src={whatsapp} alt="Whatsapp" /></a>
            <a href="#"><img src={gmail} alt="Gmail" /></a>
          </div>
        </div>
        <div className="principles">
          <div className="principles-section">
            <div className="yl-circle">
              <div className="circle"></div>
              <img className="circle-img" src={cam} alt="Câmera" />
            </div>
            <div className="principles-texts-right">
              <h1>Lançamentos Digitais & <br />Audiovisual & Transformação!</h1>
              <span>O QUE FAZEMOS É MOVIDO POR QUEM SOMOS</span>
              <hr />
              <p>Uma agência INCOMUM que não apenas presta
                serviços em marketing digital e audiovisual. Nosso
                propósito é levar transformação real para pessoas
                de todo o mundo por meio da educação digital e
                dos conteúdos dos nossos especialistas.
              </p>
            </div>
          </div>
          <div className="principles-section">
            <div className="principles-texts-right">
              <h1>Princípios e valores <br />são nossos <strong>
                alicerces</strong>.</h1>
              <span>SOMOS UMA EQUIPE ANTES DE SERMOS UMA EMPRESA</span>
              <hr />
              <p>Pretendemos ir muito além dos lançamentos digitais, impactando vidas através
                da educação. Nosso objetivo principal é levar transformação e mudança para
                pessoas de todo o mundo por meio do nosso compromisso e conteúdos dos
                nossos especialistas.
              </p>
            </div>
            <img className="img-section2" src={lamp} alt="Lâmpada" />
          </div>
        </div>
        <div className="what-we-do">
        </div>
        <div className="who-we-are">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home;