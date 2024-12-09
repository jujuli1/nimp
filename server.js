const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
// Ajouter l'en-tête CSP pour autoriser les images provenant de votre serveur
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'none'; img-src 'self' https://nimp-1.onrender.com");
    next();
});
// Middleware CORS : Autorise les requêtes provenant de GitHub Pages
app.use(cors({
    origin: '*', 
}));

// Route pour servir les images statiques
app.use('/Pimages', express.static(path.join(__dirname, 'public/Pimages')));

// Endpoint pour lister les images
app.get('/api/images', (req, res) => {
    const images = [
        { id: 1, title: 'thm', url: 'https://nimp-1.onrender.com/Pimages/thm.jpg' },
        { id: 2, title: 'tp', url: 'https://nimp-1.onrender.com/Pimages/tp.jpg' },
        
      
    ];
    res.json(images);
});

// Démarrer le serveur
app.listen(5000, () => {
    console.log('Serveur démarré sur http://localhost:5000');
});
