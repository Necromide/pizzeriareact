// App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Kontakt from './klassen/kontakt'; // Angenommen, Ihre Kontakt-Komponente befindet sich in './Kontakt'
import Home from './klassen/home'; // Angenommen, Ihre Home-Komponente befindet sich in './Home'
import Speisekarte from "./klassen/speisekarte";
import Baecker from "./klassen/baecker";
import Lieferant from "./klassen/lieferant";
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <h1>React Musterpizzeria</h1>
                    <p>Musterstraße 123, 12345 Musterstadt</p>
                    <nav>
                        <ul>
                            <li><Link to="/">Startseite</Link></li>
                            <li><Link to="/speisekarte">Speisekarte</Link></li>
                            <li><Link to="/baecker">Bäcker</Link></li>
                            <li><Link to="/lieferant">Lieferant</Link></li>
                            <li><Link to="/kontakt">Kontakt</Link></li>
                        </ul>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/speisekarte" element={<Speisekarte />} />
                        <Route path="/baecker" element={<Baecker/>} />
                        <Route path="/lieferant" element={<Lieferant/>} />
                        <Route path="/kontakt" element={<Kontakt />} />
                    </Routes>
                </main>
                <footer>
                    <p>© 2023 Codebasis Musterpizzeria - Alle Rechte vorbehalten.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
