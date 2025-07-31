import { useState } from 'react';
import './BuergerservicePage.css';
import {wasteCollectionDates, services} from "../../data/buergerservice.ts";

/**
 * React component representing the citizen services page.
 *
 * This component displays a list of services provided by the city administration.
 * Users can click on a service to view more details.
 *
 * @returns {JSX.Element} The rendered citizen services page.
 */
const BuergerservicePage = () => {
  // State to track the currently selected service
  const [selectedService, setSelectedService] = useState<number | null>(null);

  /**
   * Handles the click event for a service card.
   *
   * @param {number} serviceId - The ID of the clicked service.
   */
  const handleServiceClick = (serviceId: number) => {
    setSelectedService(serviceId === selectedService ? null : serviceId);
  };

  /**
   * Renders the details of the selected service.
   *
   * @returns {JSX.Element | null} The rendered service detail or null if no service is selected.
   */
  const renderServiceDetail = () => {
    if (selectedService === null) return null;

    const service = services.find(s => s.id === selectedService);
    if (!service) return null;

    // Render waste collection calendar for the first service
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

    // Render generic message for other services
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