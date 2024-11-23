const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware CORS : Autorise les requêtes provenant de GitHub Pages
app.use(cors({
    origin: 'https://jujuli1.github.io/nimp', // Remplacez par l'URL de votre site
}));

// Route pour servir les images statiques
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Endpoint pour lister les images
app.get('/api/images', (req, res) => {
    const images = [
        { id: 1, title: 'thm', url: 'https://nimp-1.onrender.com/images/thm.jpg' },
      
    ];
    res.json(images);
});

// Démarrer le serveur
app.listen(5000, () => {
    console.log('Serveur démarré sur http://localhost:5000');
});
