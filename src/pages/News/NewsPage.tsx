import './NewsPage.css';
import {newsItems} from "../../data/news.ts";

/**
 * React component representing the news page.
 *
 * This component displays a list of news items, each with a title, date, summary, and optional image.
 * The full content of each news item is displayed in paragraphs.
 *
 * @returns {JSX.Element} The rendered news page component.
 */
const NewsPage = () => {
  return (
      <div className="news-page">
        <h1>Aktuelles aus Musterstadt</h1>

        <div className="news-list">
          {newsItems.map((item) => (
              <article key={item.id} className="news-item">
                {/* Conditionally render the image if available */}
                {item.image && <div className="news-image">{item.image}</div>}
                <div className="news-content">
                  {/* Render the title */}
                  <h2>{item.title}</h2>
                  {/* Render the publication date */}
                  <div className="news-date">{item.date}</div>
                  {/* Render the summary */}
                  <p className="news-summary">{item.summary}</p>
                  {/* Render the full content in paragraphs */}
                  <div className="news-full-content">
                    {item.content.split('\n').map((paragraph, index) => (
                        paragraph.trim() && <p key={index}>{paragraph.trim()}</p>
                    ))}
                  </div>
                </div>
              </article>
          ))}
        </div>
      </div>
  );
};

export default NewsPage;