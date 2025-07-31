/**
 * Interface representing the structure of a news item.
 *
 * @interface NewsItem
 * @property {number} id - Unique identifier for the news item.
 * @property {string} title - Title of the news item.
 * @property {string} date - Date of publication for the news item.
 * @property {string} summary - Short summary of the news item.
 * @property {string} content - Full content of the news item.
 * @property {string} [image] - Optional image or icon associated with the news item.
 */
interface NewsItem {
    id: number;
    title: string;
    date: string;
    summary: string;
    content: string;
    image?: string;
}

/**
 * Array containing the list of news items to be displayed on the page.
 */
export const newsItems: NewsItem[] = [
    {
        id: 1,
        title: 'Neuer Spielplatz im Stadtpark eröffnet',
        date: '28. Juli 2025',
        summary: 'Nach sechsmonatiger Bauzeit wurde der neue Spielplatz im Stadtpark feierlich eröffnet.',
        content: `
      Nach sechsmonatiger Bauzeit wurde am vergangenen Samstag der neue Spielplatz im Stadtpark feierlich eröffnet. 
      Bürgermeister Thomas Müller durchschnitt das Band und gab den Spielplatz für die Kinder frei.
      
      Der moderne Spielplatz verfügt über eine Vielzahl von Spielgeräten, darunter eine große Kletteranlage, 
      Schaukeln, eine Seilbahn und ein Wasserspielbereich. Besonders die Wasserspiele waren bei den Kindern 
      am Eröffnungstag sehr beliebt.
      
      "Wir freuen uns, dass wir den Kindern unserer Stadt einen so tollen Spielplatz bieten können", 
      sagte Bürgermeister Müller in seiner Eröffnungsrede. "Der Spielplatz ist ein wichtiger Beitrag 
      zur Lebensqualität in unserer Stadt."
      
      Die Kosten für den Spielplatz beliefen sich auf rund 250.000 Euro, die zum Teil durch Spenden 
      von lokalen Unternehmen und Bürgern finanziert wurden.
    `,
        image: '🏞️'
    },
    {
        id: 2,
        title: 'Stadtfest 2025: Programm veröffentlicht',
        date: '15. Juli 2025',
        summary: 'Das Programm für das diesjährige Stadtfest wurde veröffentlicht. Besucher können sich auf ein vielfältiges Angebot freuen.',
        content: `
      Die Vorbereitungen für das diesjährige Stadtfest laufen auf Hochtouren. Nun wurde das offizielle 
      Programm veröffentlicht. Vom 12. bis 14. September 2025 verwandelt sich die Innenstadt in eine 
      bunte Festmeile mit Musik, Kunst, Kulinarik und Unterhaltung für die ganze Familie.
      
      Auf der Hauptbühne am Marktplatz werden lokale Bands und Künstler auftreten. Höhepunkt wird der 
      Auftritt der bekannten Band "Die Stadtmusikanten" am Samstagabend sein. Auf dem Rathausplatz 
      gibt es ein buntes Programm für Kinder mit Puppentheater, Bastelaktionen und einem Karussell.
      
      Für das leibliche Wohl sorgen zahlreiche Stände mit regionalen und internationalen Spezialitäten. 
      Die lokalen Vereine präsentieren sich und ihre Arbeit auf der Vereinsmeile in der Hauptstraße.
      
      "Wir haben ein tolles Programm auf die Beine gestellt und freuen uns auf viele Besucher", 
      sagt Organisatorin Lisa Schmidt. "Das Stadtfest ist immer ein Highlight im Veranstaltungskalender 
      unserer Stadt."
      
      Das detaillierte Programm ist ab sofort auf der Website der Stadt verfügbar und liegt in 
      gedruckter Form im Rathaus und in vielen Geschäften aus.
    `,
        image: '🎭'
    },
    {
        id: 3,
        title: 'Neue Fahrradwege: Stadt investiert in nachhaltige Mobilität',
        date: '5. Juli 2025',
        summary: 'Die Stadt investiert in den Ausbau des Fahrradwegenetzes. Bis Ende des Jahres sollen fünf neue Fahrradwege fertiggestellt werden.',
        content: `
      Die Stadt Musterstadt investiert in den Ausbau des Fahrradwegenetzes. In einer Pressekonferenz 
      stellte Verkehrsdezernentin Dr. Julia Weber die Pläne vor. Bis Ende des Jahres sollen fünf neue 
      Fahrradwege mit einer Gesamtlänge von 15 Kilometern fertiggestellt werden.
      
      "Mit dem Ausbau des Fahrradwegenetzes wollen wir einen wichtigen Beitrag zum Klimaschutz leisten 
      und gleichzeitig die Lebensqualität in unserer Stadt verbessern", erklärte Dr. Weber. "Fahrradfahren 
      ist gesund, umweltfreundlich und in der Stadt oft die schnellste Art der Fortbewegung."
      
      Die neuen Fahrradwege werden wichtige Wohngebiete mit dem Stadtzentrum, Schulen und Gewerbegebieten 
      verbinden. Besonders der neue Radschnellweg entlang der Hauptstraße soll Pendlern eine attraktive 
      Alternative zum Auto bieten.
      
      Die Kosten für den Ausbau belaufen sich auf rund 2 Millionen Euro. Die Stadt erhält dafür Fördermittel 
      vom Land in Höhe von 1,2 Millionen Euro.
      
      Neben dem Ausbau der Fahrradwege plant die Stadt auch die Installation von weiteren Fahrradständern 
      in der Innenstadt und an wichtigen Verkehrsknotenpunkten.
    `,
        image: '🚲'
    }
];