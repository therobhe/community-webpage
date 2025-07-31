import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import './Layout.css';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when Escape key is pressed
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="layout" onKeyDown={handleKeyDown}>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
      <header className="header">
        <div className="container">
          <div className="header-top">
            <h1 className="site-title">Gemeinde Musterstadt</h1>
            <button 
              className={`burger-menu-btn ${menuOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-label="Hauptmenü"
            >
              <span className="burger-bar"></span>
              <span className="burger-bar"></span>
              <span className="burger-bar"></span>
            </button>
          </div>
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Startseite</Link></li>
              <li><Link to="/news" onClick={() => setMenuOpen(false)}>Aktuelles</Link></li>
              <li><Link to="/verwaltung" onClick={() => setMenuOpen(false)}>Verwaltung</Link></li>
              <li><Link to="/buergerservice" onClick={() => setMenuOpen(false)}>Bürgerservice</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Kontakt</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Gemeinde Musterstadt</h3>
              <p>Rathausplatz 1<br />12345 Musterstadt</p>
            </div>
            <div className="footer-section">
              <h3>Kontakt</h3>
              <p>Telefon: 01234 / 56789<br />E-Mail: info@musterstadt.de</p>
            </div>
            <div className="footer-section">
              <h3>Öffnungszeiten</h3>
              <p>Mo-Fr: 8:00 - 16:00 Uhr<br />Do: 8:00 - 18:00 Uhr</p>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Gemeinde Musterstadt. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;