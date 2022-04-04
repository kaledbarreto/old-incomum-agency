import "./style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1><a href="#">Agência Incomum</a></h1>
      <div className="navlist">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          Princípios e Valores
        </li>
        <li>
          O que fazemos
        </li>
        <li>
          Quem somos
        </li>
      </div>
    </nav>
  );
}

export default Navbar;