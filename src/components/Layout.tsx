import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import './Layout.css';

/**
 * React component representing the layout of the application.
 *
 * This component includes a header with navigation, a main content area, and a footer.
 * It manages the state of a mobile menu and handles keyboard interactions for accessibility.
 *
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout = () => {
  // State to track whether the menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Toggles the state of the mobile menu.
   */
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  /**
   * Handles keyboard events to close the menu when the Escape key is pressed.
   *
   * @param {React.KeyboardEvent} event - The keyboard event object.
   */
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
      <div className="layout" onKeyDown={handleKeyDown}>
        {/* Backdrop for closing the menu when clicking outside */}
        {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
        <header className="header">
          {/* Overlay for the menu */}
          {menuOpen && <div className="menu-overlay"></div>}
          <div className="container">
            <div className="header-top">
              {/* Site title */}
              <h1 className="site-title">Gemeinde Musterstadt</h1>
              {/* Button to toggle the mobile menu */}
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
            {/* Navigation menu */}
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

        {/* Main content area */}
        <main className="main-content">
          <div className="container">
            <Outlet />
          </div>
        </main>

        {/* Footer section */}
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
            {/* Copyright information */}
            <div className="copyright">
              <p>&copy; {new Date().getFullYear()} Gemeinde Musterstadt. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </footer>
      </div>
  );
};

export default Layout;