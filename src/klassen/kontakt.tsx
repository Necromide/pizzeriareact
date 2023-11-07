import React from 'react';
import './css/kontakt.css'; // Stellen Sie sicher, dass Sie den korrekten Pfad zur CSS-Datei angeben

const Kontakt = () => {
    return (
        <div className="kontakt-container">
            <h2>Kontakt</h2>
            <p>Wir freuen uns auf Ihre Nachricht! Sie können uns über das untenstehende Formular oder direkt per Telefon oder E-Mail erreichen.</p>

            <h3>Kontaktformular:</h3>
            <form className="kontakt-formular">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">E-Mail:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="nachricht">Nachricht:</label>
                <textarea id="nachricht" name="nachricht"></textarea>

                <button type="submit">Senden</button>
            </form>
        </div>
    );
};

export default Kontakt;
