import { useState, FormEvent, ChangeEvent } from 'react';
import './ContactPage.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }
    
    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonnummer ist erforderlich';
    } else if (!/^[0-9\s\-+()]{6,20}$/.test(formData.phone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
    }
    
    // Subject validation
    if (!formData.subject) {
      newErrors.subject = 'Bitte wählen Sie ein Thema aus';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Nachricht muss mindestens 10 Zeichen lang sein';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real application, you would send the form data to a server here
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }
  };

  return (
    <div className="contact-page">
      <h1>Kontakt</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <section className="address-section">
            <h2>Adresse</h2>
            <address>
              Stadtverwaltung Musterstadt<br />
              Rathausplatz 1<br />
              12345 Musterstadt
            </address>
          </section>
          
          <section className="contact-details">
            <h2>Kontaktdaten</h2>
            <p>
              <strong>Telefon:</strong> 01234 / 56789<br />
              <strong>Fax:</strong> 01234 / 56780<br />
              <strong>E-Mail:</strong> info@musterstadt.de
            </p>
          </section>
          
          <section className="opening-hours">
            <h2>Öffnungszeiten</h2>
            <table className="hours-table">
              <tbody>
                <tr>
                  <td>Montag:</td>
                  <td>8:00 - 16:00 Uhr</td>
                </tr>
                <tr>
                  <td>Dienstag:</td>
                  <td>8:00 - 16:00 Uhr</td>
                </tr>
                <tr>
                  <td>Mittwoch:</td>
                  <td>8:00 - 16:00 Uhr</td>
                </tr>
                <tr>
                  <td>Donnerstag:</td>
                  <td>8:00 - 18:00 Uhr</td>
                </tr>
                <tr>
                  <td>Freitag:</td>
                  <td>8:00 - 12:00 Uhr</td>
                </tr>
                <tr>
                  <td>Samstag, Sonntag:</td>
                  <td>geschlossen</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
        
        <div className="contact-form-container">
          <h2>Kontaktformular</h2>
          
          {submitted ? (
            <div className="success-message">
              <h3>Vielen Dank für Ihre Nachricht!</h3>
              <p>Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
              <button 
                className="new-message-btn" 
                onClick={() => setSubmitted(false)}
              >
                Neue Nachricht senden
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-Mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Betreff *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={errors.subject ? 'error' : ''}
                >
                  <option value="">Bitte wählen</option>
                  <option value="allgemein">Allgemeine Anfrage</option>
                  <option value="termin">Terminvereinbarung</option>
                  <option value="beschwerde">Beschwerde</option>
                  <option value="anregung">Anregung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
                {errors.subject && <div className="error-message">{errors.subject}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Nachricht *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <div className="error-message">{errors.message}</div>}
              </div>
              
              <div className="form-note">
                <p>Felder mit * sind Pflichtfelder</p>
              </div>
              
              <button type="submit" className="submit-btn">Nachricht senden</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;