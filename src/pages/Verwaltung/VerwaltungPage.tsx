/**
 * VerwaltungPage.tsx
 *
 * This file defines the `VerwaltungPage` React component, which represents the administration page
 * of a city. It displays information about the city's administration, departments, council members,
 * and meeting schedules.
 */

import './VerwaltungPage.css';
import {councilMembers, departments} from "../../data/verwaltung.ts";

/**
 * React component representing the administration page.
 *
 * @returns JSX.Element - The rendered administration page.
 */
const VerwaltungPage = () => {
  return (
      <div className="verwaltung-page">
        <h1>Verwaltung</h1>

        {/* Introduction section describing the city's administration */}
        <section className="intro-section">
          <p>
            Die Stadtverwaltung Musterstadt ist für die Umsetzung der Beschlüsse des Stadtrats
            und die Erledigung der laufenden Verwaltungsaufgaben zuständig. Sie ist in verschiedene
            Fachbereiche gegliedert, die jeweils für bestimmte Aufgabengebiete verantwortlich sind.
          </p>
        </section>

        {/* Section displaying information about the mayor */}
        <section className="mayor-section">
          <h2>Bürgermeister</h2>
          <div className="mayor-info">
            <div className="mayor-image">👨‍💼</div>
            <div className="mayor-details">
              <h3>Dr. Thomas Müller</h3>
              <p>
                Dr. Thomas Müller ist seit 2020 Bürgermeister der Stadt Musterstadt. Er leitet die Verwaltung
                und vertritt die Stadt nach außen. Zu seinen Aufgaben gehören die Vorbereitung und Ausführung
                der Beschlüsse des Stadtrats sowie die Leitung des Tagesgeschäfts der Verwaltung.
              </p>
              <p>
                <strong>Sprechzeiten:</strong> Jeden ersten Donnerstag im Monat von 15:00 bis 17:00 Uhr
                                               (Anmeldung erforderlich)
              </p>
            </div>
          </div>
        </section>

        {/* Section displaying information about the departments */}
        <section className="departments-section">
          <h2>Fachbereiche der Verwaltung</h2>
          <div className="departments-list">
            {departments.map((dept) => (
                <div key={dept.id} className="department-card">
                  <h3>{dept.name}</h3>
                  <p className="department-head">Leitung: {dept.head}</p>
                  <h4>Aufgabenbereiche:</h4>
                  <ul>
                    {dept.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </section>

        {/* Section displaying information about the council */}
        <section className="council-section">
          <h2>Stadtrat</h2>
          <p>
            Der Stadtrat ist das wichtigste Organ der kommunalen Selbstverwaltung. Er entscheidet über
            alle grundlegenden Angelegenheiten der Stadt und kontrolliert die Verwaltung. Der Stadtrat
            von Musterstadt besteht aus 12 Mitgliedern und wird alle fünf Jahre gewählt.
          </p>

          <div className="council-members">
            <h3>Mitglieder des Stadtrats</h3>
            <table className="council-table">
              <thead>
              <tr>
                <th>Name</th>
                <th>Fraktion</th>
                <th>Funktion</th>
              </tr>
              </thead>
              <tbody>
              {councilMembers.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.party}</td>
                    <td>{member.position || 'Stadtratsmitglied'}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section displaying information about council meeting schedules */}
        <section className="meetings-section">
          <h2>Sitzungstermine</h2>
          <p>
            Die Sitzungen des Stadtrats finden in der Regel am letzten Donnerstag eines Monats um 19:00 Uhr
            im Ratssaal des Rathauses statt. Die Sitzungen sind öffentlich, alle Bürgerinnen und Bürger
            sind herzlich eingeladen, daran teilzunehmen.
          </p>
          <p>
            Die nächsten Sitzungstermine:
          </p>
          <ul className="meeting-dates">
            <li>29. August 2025</li>
            <li>26. September 2025</li>
            <li>31. Oktober 2025</li>
            <li>28. November 2025</li>
          </ul>
        </section>
      </div>
  );
};

export default VerwaltungPage;