import { Link } from 'react-router-dom';
import './TeaserCard.css';

interface TeaserCardProps {
  title: string;
  description: string;
  link: string;
  icon?: string;
}

const TeaserCard = ({ title, description, link, icon }: TeaserCardProps) => {
  return (
    <div className="teaser-card">
      {icon && <div className="teaser-icon">{icon}</div>}
      <h3 className="teaser-title">{title}</h3>
      <p className="teaser-description">{description}</p>
      <Link to={link} className="teaser-link">
        Mehr erfahren
      </Link>
    </div>
  );
};

export default TeaserCard;