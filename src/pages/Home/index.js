import Navbar from '../../components/navbar';
import "./style.css";

import instagram from '../../assets/instagram-icon.svg';
import whatsapp from '../../assets/whatsapp-icon.svg';
import gmail from '../../assets/gmail-icon.svg';

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
        </div>
        <div className="what-we-do">
        </div>
        <div className="who-we-are">
        </div>
      </div>
    </>
  )
}

export default Home;