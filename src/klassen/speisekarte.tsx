import React, { useState } from 'react';
import salamiImage from './images/salami.jpg';
import vegetarischImage from './images/vegetarisch.jpg';
import spinatHuhnImage from './images/spinat.jpg';
import './css/speisekarte.css';

// Eine einfache Datenstruktur für unsere Pizzen
const pizzas = [
    { id: 1, name: 'Salami', price: 8.49, image: salamiImage },
    { id: 2, name: 'Vegetarisch', price: 10.99, image: vegetarischImage },
    { id: 3, name: 'Spinat-Hühnchen', price: 11.99, image: spinatHuhnImage }
    // Weitere Pizzen können hier hinzugefügt werden...
];

const Speisekarte = () => {
    const [warenkorb, setWarenkorb] = useState([]);
    const [gesamtpreis, setGesamtpreis] = useState(0);

    const addToCart = (pizza) => {
        // Wir fügen eine einzigartige ID hinzu, um die Instanzen der Pizzen im Warenkorb zu unterscheiden
        const newPizza = { ...pizza, uniqueId: Date.now() + Math.random() };
        setWarenkorb([...warenkorb, newPizza]);
        setGesamtpreis(gesamtpreis + pizza.price);
    };

    const removeFromCart = (uniqueIdToRemove) => {
        // Finden und entfernen der Pizza mit der spezifischen uniqueId
        const updatedWarenkorb = warenkorb.filter(pizza => pizza.uniqueId !== uniqueIdToRemove);
        const removedPizza = warenkorb.find(pizza => pizza.uniqueId === uniqueIdToRemove);

        // Update des Warenkorbs und des Gesamtpreises
        setWarenkorb(updatedWarenkorb);
        setGesamtpreis(gesamtpreis - (removedPizza ? removedPizza.price : 0));
    };

    return (
        <div>
            <h1>Unsere Speisekarte</h1>
            <div className="pizza-list">
                {pizzas.map(pizza => (
                    <div key={pizza.id} className="pizza">
                        <img src={pizza.image} alt={pizza.name + ' Pizza'} className="pizza-img" />
                        <h2>{pizza.name}</h2>
                        <p>Preis: {pizza.price.toFixed(2)}€</p>
                        <button onClick={() => addToCart(pizza)}>In den Warenkorb</button>
                    </div>
                ))}
            </div>

            <h2>Ihr Warenkorb</h2>
            <div className="warenkorb">
                {warenkorb.length === 0 ? (
                    <p>Ihr Warenkorb ist leer.</p>
                ) : (
                    warenkorb.map(pizza => (
                        <div key={pizza.uniqueId}>
                            {pizza.name} x1
                            <button onClick={() => removeFromCart(pizza.uniqueId)}>Entfernen</button>
                        </div>
                    ))
                )}
                <div><strong>Gesamtpreis:</strong> {gesamtpreis.toFixed(2)}€</div>
            </div>

            <div className="bestellung-abschliessen">
                <h2>Bestellung abschließen</h2>
                <form>
                    <label htmlFor="address">Adresse:</label>
                    <textarea id="address" name="address" required></textarea>
                    <button type="submit">Bestellung abschließen</button>
                </form>
            </div>
        </div>
    );
};

export default Speisekarte;
