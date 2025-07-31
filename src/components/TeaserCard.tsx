import { Link } from 'react-router-dom';
import './TeaserCard.css';

/**
 * Props for the `TeaserCard` component.
 *
 * @interface TeaserCardProps
 * @property {string} title - The title displayed on the teaser card.
 * @property {string} description - A brief description displayed on the teaser card.
 * @property {string} link - The URL or route the teaser card links to.
 * @property {string} [icon] - Optional icon displayed on the teaser card.
 */
interface TeaserCardProps {
    title: string;
    description: string;
    link: string;
    icon?: string;
}

/**
 * React component representing a teaser card.
 *
 * This component displays a title, description, optional icon, and a link.
 * It is styled using the `TeaserCard.css` file.
 *
 * @param {TeaserCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered teaser card component.
 */
const TeaserCard = ({ title, description, link, icon }: TeaserCardProps) => {
    return (
        <div className="teaser-card">
            {/* Conditionally render the icon if provided */}
            {icon && <div className="teaser-icon">{icon}</div>}
            {/* Render the title */}
            <h3 className="teaser-title">{title}</h3>
            {/* Render the description */}
            <p className="teaser-description">{description}</p>
            {/* Render the link */}
            <Link to={link} className="teaser-link">
                Mehr erfahren
            </Link>
        </div>
    );
};

export default TeaserCard;