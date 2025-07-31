/**
 * Interface representing a service item.
 *
 * @interface ServiceItem
 * @property {number} id - Unique identifier for the service.
 * @property {string} title - Title of the service.
 * @property {string} description - Description of the service.
 * @property {string} icon - Icon representing the service.
 */
interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

/**
 * Array containing information about the available services.
 */
export const services: ServiceItem[] = [
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

/**
 * Array containing dummy data for the waste collection calendar.
 */
export const wasteCollectionDates = [
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