import './VerwaltungPage.css';

interface DepartmentInfo {
  id: number;
  name: string;
  head: string;
  responsibilities: string[];
}

interface CouncilMember {
  id: number;
  name: string;
  party: string;
  position?: string;
}

const departments: DepartmentInfo[] = [
  {
    id: 1,
    name: 'Hauptamt',
    head: 'Dr. Sabine Weber',
    responsibilities: [
      'Personal und Organisation',
      'Öffentlichkeitsarbeit',
      'Wahlen und Statistik',
      'Informationstechnologie'
    ]
  },
  {
    id: 2,
    name: 'Finanzamt',
    head: 'Michael Schneider',
    responsibilities: [
      'Haushalt und Finanzen',
      'Steuern und Abgaben',
      'Controlling',
      'Beschaffung'
    ]
  },
  {
    id: 3,
    name: 'Bauamt',
    head: 'Dipl.-Ing. Thomas Becker',
    responsibilities: [
      'Stadtplanung',
      'Bauordnung',
      'Tiefbau',
      'Umwelt und Grünflächen'
    ]
  },
  {
    id: 4,
    name: 'Ordnungsamt',
    head: 'Martina Hoffmann',
    responsibilities: [
      'Öffentliche Sicherheit und Ordnung',
      'Gewerbeangelegenheiten',
      'Verkehrsüberwachung',
      'Feuerwehr und Katastrophenschutz'
    ]
  },
  {
    id: 5,
    name: 'Sozialamt',
    head: 'Dr. Frank Müller',
    responsibilities: [
      'Soziale Leistungen',
      'Jugend und Familie',
      'Senioren',
      'Integration'
    ]
  }
];

const councilMembers: CouncilMember[] = [
  { id: 1, name: 'Dr. Thomas Müller', party: 'CDU', position: 'Bürgermeister' },
  { id: 2, name: 'Martina Schmidt', party: 'SPD', position: '1. Stellvertretende Bürgermeisterin' },
  { id: 3, name: 'Dr. Klaus Weber', party: 'Grüne', position: '2. Stellvertretender Bürgermeister' },
  { id: 4, name: 'Sabine Wagner', party: 'CDU' },
  { id: 5, name: 'Michael Becker', party: 'CDU' },
  { id: 6, name: 'Julia Hoffmann', party: 'SPD' },
  { id: 7, name: 'Peter Schneider', party: 'SPD' },
  { id: 8, name: 'Lisa Koch', party: 'Grüne' },
  { id: 9, name: 'Frank Meyer', party: 'FDP' },
  { id: 10, name: 'Susanne Richter', party: 'Die Linke' },
  { id: 11, name: 'Andreas Wolf', party: 'Freie Wähler' },
  { id: 12, name: 'Petra Neumann', party: 'CDU' }
];

const VerwaltungPage = () => {
  return (
    <div className="verwaltung-page">
      <h1>Verwaltung</h1>
      
      <section className="intro-section">
        <p>
          Die Stadtverwaltung Musterstadt ist für die Umsetzung der Beschlüsse des Stadtrats 
          und die Erledigung der laufenden Verwaltungsaufgaben zuständig. Sie ist in verschiedene 
          Fachbereiche gegliedert, die jeweils für bestimmte Aufgabengebiete verantwortlich sind.
        </p>
      </section>
      
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