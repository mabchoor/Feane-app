import React from 'react';
import { Link } from 'react-router-dom';
import './styles/common.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero fade-in">
        <div className="hero-content">
          <h1 className="slide-in">Bienvenue chez Feane</h1>
          <p className="slide-in">Une expérience culinaire inoubliable vous attend</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary btn-hover">Voir le Menu</Link>
            <Link to="/book" className="btn btn-secondary btn-hover">Réserver une Table</Link>
          </div>
        </div>
      </section>

      <section className="features container">
        <div className="feature-card card hover-lift">
          <div className="feature-icon">🍽️</div>
          <h3>Cuisine Raffinée</h3>
          <p>Découvrez nos plats préparés avec passion par nos chefs étoilés.</p>
        </div>
        <div className="feature-card card hover-lift">
          <div className="feature-icon">🌟</div>
          <h3>Service Exceptionnel</h3>
          <p>Une équipe dévouée à votre satisfaction.</p>
        </div>
        <div className="feature-card card hover-lift">
          <div className="feature-icon">🏆</div>
          <h3>Ambiance Unique</h3>
          <p>Une atmosphère chaleureuse et conviviale.</p>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          /* Removed padding-top as it's now handled by body */
        }

        .hero {
          height: 90vh;
          background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.7)),
                      url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--white);
          position: relative;
          margin-top: -80px; /* Offset the body padding */
          padding-top: 80px; /* Add padding to maintain height */
        }

        .hero::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100px;
          background: linear-gradient(to top, var(--background), transparent);
        }

        .hero-content {
          max-width: 800px;
          padding: var(--spacing-xl);
          position: relative;
          z-index: 1;
        }

        .hero h1 {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-md);
          color: var(--white);
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          font-weight: 700;
        }

        .hero p {
          font-size: var(--font-size-xl);
          margin-bottom: var(--spacing-xl);
          color: var(--white);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .hero-buttons {
          display: flex;
          gap: var(--spacing-lg);
          justify-content: center;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
          padding: var(--spacing-xxl) 0;
          margin-top: -50px;
          position: relative;
          z-index: 2;
        }

        .feature-card {
          text-align: center;
          padding: var(--spacing-xl);
          background: var(--white);
          border-radius: var(--border-radius-lg);
          box-shadow: var(--shadow-lg);
          transition: all var(--transition-normal);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--shadow-xl);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: var(--spacing-md);
        }

        .feature-card h3 {
          margin-bottom: var(--spacing-md);
          color: var(--primary);
          font-size: var(--font-size-xl);
        }

        .feature-card p {
          color: var(--text-light);
          line-height: var(--line-height-relaxed);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: var(--font-size-3xl);
          }

          .hero p {
            font-size: var(--font-size-lg);
          }

          .hero-buttons {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .features {
            margin-top: 0;
            padding: var(--spacing-xl) var(--spacing-md);
          }

          .feature-card {
            padding: var(--spacing-lg);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
