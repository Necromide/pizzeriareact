import React, { useState } from 'react';
import './App.css';

type PizzaItem = 'Salami' | 'Vegetarisch' | 'Spinat-Hühnchen';

interface PizzaProps {
    name: PizzaItem;
    price: string;
    addToCart: () => void;
}

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

            <nav>
                <ul>
                    <li>Startseite</li>
                    <li>Speisekarte</li>
                    <li>Bäcker</li>
                    <li>Lieferant</li>
                    <li>Kontakt</li>
                </ul>
            </nav>

            <section>
                <h2>Unsere Speisekarte</h2>
                <Pizza
                    name="Salami"
                    price="8.49€"
                    addToCart={() => addItemToCart('Salami')}
                />
                <Pizza
                    name="Vegetarisch"
                    price="10.99€"
                    addToCart={() => addItemToCart('Vegetarisch')}
                />
                <Pizza
                    name="Spinat-Hühnchen"
                    price="11.99€"
                    addToCart={() => addItemToCart('Spinat-Hühnchen')}
                />
            </section>

            <section>
                <h2>Ihr Warenkorb</h2>
                <Cart cart={cart} removeItem={removeItemFromCart} />
            </section>

            <footer>
                © 2023 Codebasis Musterpizzeria - Alle Rechte vorbehalten.
            </footer>
        </div>
    );
}

const Pizza: React.FC<PizzaProps> = ({ name, price, addToCart }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Preis: {price}</p>
            <button onClick={addToCart}>In den Warenkorb</button>
        </div>
    );
}

const Cart: React.FC<CartProps> = ({ cart, removeItem }) => {
    let totalPrice = 0; // Die Preislogik muss noch implementiert werden
    return (
        <div>
            {cart.map((item, index) => (
                <div key={index}>
                    {item} x1
                    <button onClick={() => removeItem(item)}>Entfernen</button>
                </div>
            ))}
            <p>Gesamtpreis: {totalPrice}€</p>
        </div>
    );
}

export default App;