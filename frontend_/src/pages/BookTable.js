import React, { useState } from 'react';
import '../styles/common.css';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="book-table-container">
      <div className="book-table-content">
        <div className="book-table-header">
          <h1 className="slide-in">Réserver une Table</h1>
          <p className="slide-in">Réservez votre expérience culinaire inoubliable</p>
        </div>

        <div className="book-table-form-container">
          <form onSubmit={handleSubmit} className="book-table-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Votre nom"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Téléphone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="+33 6 12 34 56 78"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="date" className="form-label">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time" className="form-label">Heure</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests" className="form-label">Nombre de Personnes</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests" className="form-label">Demandes Spéciales</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                className="form-control"
                placeholder="Allergies, préférences, occasions spéciales..."
                rows="4"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-hover">
              Confirmer la Réservation
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .book-table-container {
          padding: var(--spacing-xxl) 0;
          background-color: var(--background);
        }

        .book-table-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 var(--spacing-xl);
        }

        .book-table-header {
          text-align: center;
          margin-bottom: var(--spacing-xxl);
        }

        .book-table-header h1 {
          color: var(--primary);
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-3xl);
        }

        .book-table-header p {
          color: var(--text-light);
          font-size: var(--font-size-lg);
        }

        .book-table-form-container {
          background: var(--white);
          padding: var(--spacing-xxl);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .book-table-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--spacing-lg);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .form-label {
          font-weight: 500;
          color: var(--text);
        }

        .form-control {
          padding: var(--spacing-md);
          border: 2px solid var(--background-dark);
          border-radius: var(--border-radius-md);
          font-size: var(--font-size-md);
          transition: all var(--transition-fast);
          background-color: var(--white);
        }

        .form-control:focus {
          border-color: var(--primary);
          box-shadow: var(--shadow-sm);
          outline: none;
        }

        .form-control::placeholder {
          color: var(--text-lighter);
        }

        textarea.form-control {
          resize: vertical;
          min-height: 100px;
        }

        .btn {
          align-self: center;
          min-width: 200px;
          padding: var(--spacing-md) var(--spacing-xl);
          font-size: var(--font-size-lg);
        }

        @media (max-width: 768px) {
          .book-table-container {
            padding: var(--spacing-xl) 0;
          }

          .book-table-content {
            padding: 0 var(--spacing-md);
          }

          .book-table-form-container {
            padding: var(--spacing-xl);
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default BookTable; 