import { useState } from 'react';
import './Partners.scss';

export function Partners() {
  const [isExpanded, setIsExpanded] = useState(false);

  const partner = {
    name: "Техник",
    subtitle: "ЕЛЕКТРОМОНТАЖНІ РОБОТИ",
    description: "Професійні електромонтажні роботи, монтаж електричних мереж, трансформаторних підстанцій та сонячних електростанцій.",
    website: "https://www.texnikua.org/",
    services: [
      "ЕЛЕКТОМОНТАЖНІ РОБОТИ",
      "Послуги вимірювання ізоляції - ЕЛЕКТРОТЕХНІЧНА ЛАБОРАТОРІЯ",
      "Встановлення камер відеоспостереження та систем безпеки - БЛИСКАВКОЗАХИСТ",
      "Встановлення протипожежних систем та електричної сигналізації - ПРОТИПОЖЕЖНА ОБРОБКА",
      "Електричні панелі управління та системи автоматизації - СОНЯЧНІ ЕЛЕКТРОСТАНЦІЇ"
    ]
  };

  return (
    <div className="partners-banner">
      <div className="partners-banner__content">
        <div className="partners-banner__main">
          <div className="partners-banner__info">
            <span style={{color: "white"}} className="partners-banner__label">Наш партнер:</span>
            <h3 className="partners-banner__name">{partner.name}</h3>
            <span className="partners-banner__subtitle">{partner.subtitle}</span>
          </div>
          <div className="partners-banner__actions">
            <a
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="partners-banner__link"
            >
              Відвідати сайт
            </a>
            <button
              className="partners-banner__toggle"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? '▲' : '▼'}
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="partners-banner__details">
            <p className="partners-banner__description">{partner.description}</p>
            <div className="partners-banner__services">
              <h4>Послуги:</h4>
              <ul>
                {partner.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
