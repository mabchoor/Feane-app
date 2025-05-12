import React, { useState } from 'react';
import '../styles/common.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '5',
    category: 'service',
    message: ''
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
    <div className="feedback-container">
      <div className="feedback-content">
        <div className="feedback-header">
          <h1 className="slide-in">Votre Avis</h1>
          <p className="slide-in">Partagez votre expérience avec nous</p>
        </div>

        <div className="feedback-form-container">
          <form onSubmit={handleSubmit} className="feedback-form">
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nom</label>
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
            </div>

            <div className="form-group">
              <label className="form-label">Note Globale</label>
              <div className="rating-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="rating-star">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      checked={formData.rating === star.toString()}
                      onChange={handleChange}
                    />
                    <span className="star-icon">★</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-label">Catégorie</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option value="service">Service</option>
                <option value="food">Nourriture</option>
                <option value="ambiance">Ambiance</option>
                <option value="value">Rapport Qualité-Prix</option>
                <option value="other">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Votre Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                placeholder="Partagez votre expérience avec nous..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-hover">
              Envoyer l'Avis
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .feedback-container {
          padding: var(--spacing-xxl) 0;
          background-color: var(--background);
        }

        .feedback-content {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 var(--spacing-xl);
        }

        .feedback-header {
          text-align: center;
          margin-bottom: var(--spacing-xxl);
        }

        .feedback-header h1 {
          color: var(--primary);
          margin-bottom: var(--spacing-md);
          font-size: var(--font-size-3xl);
        }

        .feedback-header p {
          color: var(--text-light);
          font-size: var(--font-size-lg);
        }

        .feedback-form-container {
          background: var(--white);
          padding: var(--spacing-xxl);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-lg);
        }

        .feedback-form {
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
          min-height: 150px;
        }

        .rating-container {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          margin-top: var(--spacing-sm);
        }

        .rating-star {
          cursor: pointer;
          position: relative;
        }

        .rating-star input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
        }

        .star-icon {
          font-size: 2rem;
          color: var(--text-lighter);
          transition: all var(--transition-fast);
        }

        .rating-star:hover .star-icon,
        .rating-star input:checked ~ .star-icon {
          color: var(--secondary);
          transform: scale(1.1);
        }

        .btn {
          align-self: center;
          min-width: 200px;
          padding: var(--spacing-md) var(--spacing-xl);
          font-size: var(--font-size-lg);
        }

        @media (max-width: 768px) {
          .feedback-container {
            padding: var(--spacing-xl) 0;
          }

          .feedback-content {
            padding: 0 var(--spacing-md);
          }

          .feedback-form-container {
            padding: var(--spacing-xl);
          }

          .form-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-md);
          }

          .rating-container {
            gap: var(--spacing-sm);
          }

          .star-icon {
            font-size: 1.5rem;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Feedback; 