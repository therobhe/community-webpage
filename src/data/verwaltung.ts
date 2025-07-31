/**
 * Interface representing information about a department in the administration.
 */
interface DepartmentInfo {
    id: number; // Unique identifier for the department
    name: string; // Name of the department
    head: string; // Name of the department head
    responsibilities: string[]; // List of responsibilities handled by the department
}

/**
 * Interface representing information about a council member.
 */
interface CouncilMember {
    id: number; // Unique identifier for the council member
    name: string; // Name of the council member
    party: string; // Political party of the council member
    position?: string; // Optional position held by the council member
}

/**
 * Array containing information about the various departments in the administration.
 */
export const departments: DepartmentInfo[] = [
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

/**
 * Array containing information about the council members.
 */
export const councilMembers: CouncilMember[] = [
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