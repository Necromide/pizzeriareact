import React, { useState } from 'react';
import './App.css';
import Speisekarte from './klassen/speisekarte';

type PizzaItem = 'Salami' | 'Vegetarisch' | 'Spinat-Hühnchen';

interface CartProps {
    cart: PizzaItem[];
    removeItem: (item: PizzaItem) => void;
}

function App() {
    const [cart, setCart] = useState<PizzaItem[]>([]);

    const addItemToCart = (item: PizzaItem) => {
        setCart([...cart, item]);
    };

    const removeItemFromCart = (itemToRemove: PizzaItem) => {
        setCart(cart.filter(item => item !== itemToRemove));
    };

    return (
        <div>
            <header>
                <h1>Codebasis Musterpizzeria</h1>
                <p>Musterstraße 123, 12345 Musterstadt</p>
            </header>

            <Navigation />

            <Speisekarte addToCart={addItemToCart} />
            <Cart cart={cart} removeItem={removeItemFromCart} />

            <footer>
                © 2023 Codebasis Musterpizzeria - Alle Rechte vorbehalten.
            </footer>
        </div>
    );
}

const Navigation: React.FC = () => {
    return (
        <nav>
            <ul>
                <li>Startseite</li>
                <li>Speisekarte</li>
                <li>Bäcker</li>
                <li>Lieferant</li>
                <li>Kontakt</li>
            </ul>
        </nav>
    );
}

const Cart: React.FC<CartProps> = ({ cart, removeItem }) => {
    return (
        <section>
            <h2>Ihr Warenkorb</h2>
            {cart.map((item, index) => (
                <div key={index}>
                    {item} x1
                    <button onClick={() => removeItem(item)}>Entfernen</button>
                </div>
            ))}
            <p>Gesamtpreis: {/* Hier müsste die Preislogik implementiert werden */}€</p>
        </section>
    );
}

export default App;