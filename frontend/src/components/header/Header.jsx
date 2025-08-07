import { useState } from "react";
import Logo from "/src/assets/suriel-trips-logo.png"
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo"><img src={Logo} alt="Logo Suriel Trips" /></div>

      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <a className="navLetter" href="#reservas">Reservas</a>
        <a className="navLetter" href="#relatorios">Relatórios</a>
        <a className="navLetter" href="#parceiros">Parceiros</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "rotate1" : ""}`} />
        <div className={`bar ${menuOpen ? "fade" : ""}`} />
        <div className={`bar ${menuOpen ? "rotate2" : ""}`} />
      </div>
    </header>
  );
};

export default Header;
