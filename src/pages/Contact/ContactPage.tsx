import { useState, type FormEvent, type ChangeEvent } from 'react';
import './ContactPage.css';

/**
 * Interface representing the structure of the form data.
 *
 * @interface FormData
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 * @property {string} phone - The phone number of the user.
 * @property {string} subject - The subject of the user's inquiry.
 * @property {string} message - The message content provided by the user.
 */
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * Interface representing the structure of form validation errors.
 *
 * @interface FormErrors
 * @property {string} [name] - Error message for the name field.
 * @property {string} [email] - Error message for the email field.
 * @property {string} [phone] - Error message for the phone field.
 * @property {string} [subject] - Error message for the subject field.
 * @property {string} [message] - Error message for the message field.
 */
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

/**
 * React component representing the contact page.
 *
 * This component includes a contact form for users to submit inquiries and displays
 * contact information such as address, phone number, and opening hours.
 *
 * @returns {JSX.Element} The rendered contact page component.
 */
const ContactPage = () => {
  // State to manage form data
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // State to manage form validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // State to track whether the form has been successfully submitted
  const [submitted, setSubmitted] = useState(false);

  /**
   * Handles changes to form inputs and updates the form data state.
   * Clears validation errors for the field being updated.
   *
   * @param {ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>} e - The change event object.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  /**
   * Validates the form data and sets validation errors if any fields are invalid.
   *
   * @returns {boolean} True if the form is valid, false otherwise.
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonnummer ist erforderlich';
    } else if (!/^[0-9\s\-+()]{6,20}$/.test(formData.phone)) {
      newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein';
    }

    if (!formData.subject) {
      newErrors.subject = 'Bitte wählen Sie ein Thema aus';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Nachricht muss mindestens 10 Zeichen lang sein';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles the form submission event, validates the form, and resets the form data if valid.
   *
   * @param {FormEvent} e - The form submission event object.
   */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);

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