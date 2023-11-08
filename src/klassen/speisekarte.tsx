import React, { useState } from 'react';
// Import der CSS-Datei und Bilder
import './css/speisekarte.css';
import salamiImage from './images/salami.jpg';
import vegetarischImage from './images/vegetarisch.jpg';
import spinatHuhnImage from './images/spinat.jpg';

// Definieren eines Typs für die Pizza
interface Pizza {
    id: number;
    name: string;
    price: number;
    image: string;
}

// Definieren eines Typs für die Pizza im Warenkorb, welche zusätzlich eine uniqueId hat
interface PizzaInCart extends Pizza {
    uniqueId: number;
}

// Die Pizzen Array
const pizzas: Pizza[] = [
    { id: 1, name: 'Salami', price: 8.49, image: salamiImage },
    { id: 2, name: 'Vegetarisch', price: 10.99, image: vegetarischImage },
    { id: 3, name: 'Spinat-Huhn', price: 11.99, image: spinatHuhnImage },
    // ... Weitere Pizzen
];

const Speisekarte: React.FC = () => {
    const [warenkorb, setWarenkorb] = useState<PizzaInCart[]>([]);
    const [gesamtpreis, setGesamtpreis] = useState<number>(0);

    const addToCart = (pizza: Pizza) => {
        const newPizza: PizzaInCart = { ...pizza, uniqueId: Date.now() + Math.random() };
        setWarenkorb([...warenkorb, newPizza]);
        setGesamtpreis(gesamtpreis + pizza.price);
    };

    const removeFromCart = (uniqueIdToRemove: number) => {
        const updatedWarenkorb = warenkorb.filter(pizza => pizza.uniqueId !== uniqueIdToRemove);
        const removedPizza = warenkorb.find(pizza => pizza.uniqueId === uniqueIdToRemove);
        setWarenkorb(updatedWarenkorb);
        setGesamtpreis(gesamtpreis - (removedPizza ? removedPizza.price : 0));
    };

    return (
        <div>
            <h1>Unsere Speisekarte</h1>
            {pizzas.map(pizza => (
                <div key={pizza.id} className="pizza">
                    <img src={pizza.image} alt={`${pizza.name} Pizza`} className="pizza-img" />
                    <h2>{pizza.name}</h2>
                    <p>Preis: {pizza.price}€</p>
                    <button onClick={() => addToCart(pizza)}>In den Warenkorb</button>
                </div>
            ))}

            <h2>Ihr Warenkorb</h2>
            <div>
                {warenkorb.length === 0 && <p>Ihr Warenkorb ist leer.</p>}
                {warenkorb.map(pizza => (
                    <div key={pizza.uniqueId}>
                        {pizza.name} x1 - {pizza.price}€
                        <button onClick={() => removeFromCart(pizza.uniqueId)}>Entfernen</button>
                    </div>
                ))}
                <div><strong>Gesamtpreis:</strong> {gesamtpreis.toFixed(2)}€</div>
            </div>

            {/* ...weitere Komponenten oder Elemente wie Adresse und Bestellformular */}
        </div>
    );
};

export default Speisekarte;
