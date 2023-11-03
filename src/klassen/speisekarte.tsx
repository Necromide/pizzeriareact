import React from 'react';

type PizzaItem = 'Salami' | 'Vegetarisch' | 'Spinat-Hühnchen';

interface PizzaProps {
    name: PizzaItem;
    price: string;
    addToCart: (item: PizzaItem) => void;
}

const Pizza: React.FC<PizzaProps> = ({ name, price, addToCart }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Preis: {price}</p>
            <button onClick={() => addToCart(name)}>In den Warenkorb</button>
        </div>
    );
}

const speisekarte: React.FC<{ addToCart: (item: PizzaItem) => void }> = ({ addToCart }) => {
    return (
        <section>
            <h2>Unsere Speisekarte</h2>
            <Pizza
                name="Salami"
                price="8.49€"
                addToCart={addToCart}
            />
            <Pizza
                name="Vegetarisch"
                price="10.99€"
                addToCart={addToCart}
            />
            <Pizza
                name="Spinat-Hühnchen"
                price="11.99€"
                addToCart={addToCart}
            />
        </section>
    );
}

export default speisekarte;