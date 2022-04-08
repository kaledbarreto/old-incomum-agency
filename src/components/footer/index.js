import instagram from '../../assets/instagram-icon.svg';
import whatsapp from '../../assets/whatsapp-icon.svg';
import gmail from '../../assets/gmail-icon.svg';

import "./style.css";

function Footer() {
  return (
    <nav className="footer">
      <div className="navlist">
        <img src={instagram} alt="Instagram" />
        <img src={whatsapp} alt="Whatsapp" />
        <img src={gmail} alt="Gmail" />
      </div>
    </nav>
  );
}

export default Footer;