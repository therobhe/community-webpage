import { useState } from 'react';
import './BuergerservicePage.css';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Abfallkalender',
    description: 'Informationen zur Müllabfuhr und Recycling in Musterstadt.',
    icon: '🗑️'
  },
  {
    id: 2,
    title: 'Anmeldung Wohnsitz',
    description: 'Informationen zur An-, Um- und Abmeldung Ihres Wohnsitzes.',
    icon: '🏠'
  },
  {
    id: 3,
    title: 'Personalausweis & Reisepass',
    description: 'Beantragung und Verlängerung von Ausweisdokumenten.',
    icon: '🪪'
  },
  {
    id: 4,
    title: 'Kfz-Zulassung',
    description: 'Informationen zur An- und Ummeldung von Kraftfahrzeugen.',
    icon: '🚗'
  },
  {
    id: 5,
    title: 'Führerschein',
    description: 'Beantragung und Umschreibung von Führerscheinen.',
    icon: '🚦'
  },
  {
    id: 6,
    title: 'Standesamt',
    description: 'Informationen zu Eheschließungen, Geburten und Sterbefällen.',
    icon: '📝'
  }
];

// Dummy data for the waste collection calendar
const wasteCollectionDates = [
  { date: '05.08.2025', type: 'Restmüll' },
  { date: '12.08.2025', type: 'Biomüll' },
  { date: '12.08.2025', type: 'Papier' },
  { date: '19.08.2025', type: 'Restmüll' },
  { date: '26.08.2025', type: 'Biomüll' },
  { date: '02.09.2025', type: 'Restmüll' },
  { date: '09.09.2025', type: 'Biomüll' },
  { date: '09.09.2025', type: 'Papier' },
  { date: '16.09.2025', type: 'Restmüll' },
  { date: '23.09.2025', type: 'Biomüll' },
  { date: '30.09.2025', type: 'Restmüll' }
];

const BuergerservicePage = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };

  const renderServiceDetail = () => {
    if (selectedService === null) return null;

    const service = services.find(s => s.id === selectedService);
    if (!service) return null;

    // For this demo, we'll only implement the waste collection calendar for the first service
    if (service.id === 1) {
      return (
        <div className="service-detail">
          <h3>{service.title}</h3>
          <p>Hier finden Sie die nächsten Abholtermine für Ihre Straße:</p>
          
          <div className="waste-calendar">
            <table>
              <thead>
                <tr>
                  <th>Datum</th>
                  <th>Abfallart</th>
                </tr>
              </thead>
              <tbody>
                {wasteCollectionDates.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="note">
            Hinweis: Dies ist ein Beispielkalender. In einer echten Anwendung würden hier die tatsächlichen 
            Abholtermine für Ihre Adresse angezeigt werden.
          </p>
        </div>
      );
    }

    // Generic message for other services
    return (
      <div className="service-detail">
        <h3>{service.title}</h3>
        <p>
          Dieser Bereich befindet sich im Aufbau. Bitte besuchen Sie uns zu einem späteren Zeitpunkt wieder 
          oder kontaktieren Sie uns direkt für Informationen zu diesem Service.
        </p>
        <p>
          Sie können uns telefonisch unter 01234 / 56789 oder per E-Mail an info@musterstadt.de erreichen.
        </p>
      </div>
    );
  };

  return (
    <div className="buergerservice-page">
      <h1>Bürgerservice</h1>
      
      <p className="intro-text">
        Hier finden Sie Informationen zu den wichtigsten Dienstleistungen der Stadtverwaltung Musterstadt. 
        Klicken Sie auf einen Service, um weitere Informationen zu erhalten.
      </p>
      
      <div className="services-grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`service-card ${selectedService === service.id ? 'active' : ''}`}
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      
      {renderServiceDetail()}
      
      <div className="service-note">
        <h3>Öffnungszeiten Bürgerbüro</h3>
        <p>
          <strong>Montag - Mittwoch:</strong> 8:00 - 16:00 Uhr<br />
          <strong>Donnerstag:</strong> 8:00 - 18:00 Uhr<br />
          <strong>Freitag:</strong> 8:00 - 12:00 Uhr
        </p>
        <p>
          Für viele Dienstleistungen ist eine vorherige Terminvereinbarung erforderlich. 
          Bitte kontaktieren Sie uns telefonisch oder nutzen Sie unser Online-Terminvergabesystem.
        </p>
      </div>
    </div>
  );
};

export default BuergerservicePage;