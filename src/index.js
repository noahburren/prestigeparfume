import React from "react";
import ReactDOM from "react-dom/client"; // Neue Methode für React 18
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App"; // Importiere die App-Komponente
import "./styles.css"; // Importiere deine CSS-Datei
import Header from "./header";

// Erstelle den Root-Container
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendere die App mit dem Router
root.render(
    
    <React.StrictMode>
        <Router>
            <Header/>
            <App /> {/* Füge den Router hier ein */}
            <footer>
                <p className="footer_copy">
                    &#169; Prestige Parfume. Alle Rechte vorbehalten.
                </p>
            </footer>
        </Router>
    </React.StrictMode>
);
