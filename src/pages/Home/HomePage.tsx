import TeaserCard from '../../components/TeaserCard';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Willkommen in Musterstadt</h1>
        <p className="hero-text">
          Entdecken Sie unsere lebendige Gemeinde im Herzen von Deutschland. 
          Hier finden Sie alle wichtigen Informationen rund um das Leben in Musterstadt.
        </p>
      </section>

      <section className="welcome-section">
        <h2>Unsere Gemeinde</h2>
        <p>
          Musterstadt ist eine charmante Kleinstadt mit etwa 25.000 Einwohnern, umgeben von 
          wunderschöner Natur und einer reichen Geschichte. Unsere Gemeinde bietet eine hohe 
          Lebensqualität mit ausgezeichneten Schulen, vielfältigen Freizeitmöglichkeiten und 
          einer aktiven Gemeinschaft.
        </p>
        <p>
          Auf dieser Website finden Sie aktuelle Informationen zu Veranstaltungen, 
          Dienstleistungen der Gemeindeverwaltung und wichtige Kontakte. Wir freuen uns, 
          dass Sie hier sind!
        </p>
      </section>

      <section className="teaser-section">
        <h2>Entdecken Sie mehr</h2>
        <div className="teaser-grid">
          <TeaserCard 
            title="Aktuelles" 
            description="Bleiben Sie informiert über die neuesten Ereignisse und Veranstaltungen in unserer Gemeinde."
            link="/news"
            icon="📰"
          />
          <TeaserCard 
            title="Verwaltung" 
            description="Informationen über die Gemeindeverwaltung, den Gemeinderat und öffentliche Bekanntmachungen."
            link="/verwaltung"
            icon="🏛️"
          />
          <TeaserCard 
            title="Bürgerservice" 
            description="Entdecken Sie unsere Dienstleistungen für Bürgerinnen und Bürger, von Abfallkalender bis Zulassungsstelle."
            link="/buergerservice"
            icon="📋"
          />
          <TeaserCard 
            title="Kontakt" 
            description="Haben Sie Fragen oder Anliegen? Kontaktieren Sie uns - wir sind für Sie da!"
            link="/contact"
            icon="📞"
          />
        </div>
      </section>

      <section className="events-section">
        <h2>Kommende Veranstaltungen</h2>
        <div className="event-list">
          <div className="event-item">
            <div className="event-date">15. Aug 2025</div>
            <div className="event-details">
              <h3>Sommerfest im Stadtpark</h3>
              <p>Jährliches Sommerfest mit Musik, Essen und Unterhaltung für die ganze Familie.</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">10. Sep 2025</div>
            <div className="event-details">
              <h3>Bürgerversammlung</h3>
              <p>Informationsveranstaltung zu aktuellen Themen der Stadtentwicklung.</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">03. Okt 2025</div>
            <div className="event-details">
              <h3>Tag der Deutschen Einheit</h3>
              <p>Feierlichkeiten zum Tag der Deutschen Einheit auf dem Marktplatz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;