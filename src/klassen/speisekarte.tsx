import React from 'react';
// Importieren der Bilder
import salamiImage from './images/salami.jpg';
import vegetarischImage from './images/vegetarisch.jpg';
import spinatHuhnImage from './images/spinat.jpg';
import './css/speisekarte.css';

// Komponentendefinition
const Speisekarte = () => {
    return (
        <div>
            <h1>Unsere Speisekarte</h1>
            <div className="pizza">
                <img src={salamiImage} alt="Salami Pizza" className="pizza-img" />
                <h2>Salami</h2>
                <p>Preis: 8.49€</p>
                <button>In den Warenkorb</button>
            </div>
            <div className="pizza">
                <img src={vegetarischImage} alt="Vegetarische Pizza" className="pizza-img" />
                <h2>Vegetarisch</h2>
                <p>Preis: 10.99€</p>
                <button>In den Warenkorb</button>
            </div>
            <div className="pizza">
                <img src={spinatHuhnImage} alt="Spinat-Hühnchen Pizza" className="pizza-img" />
                <h2>Spinat-Hühnchen</h2>
                <p>Preis: 11.99€</p>
                <button>In den Warenkorb</button>
            </div>
            {/* ...weitere Pizzen */}
        </div>
    );
};

export default Speisekarte;
