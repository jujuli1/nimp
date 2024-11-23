const express = require('express');
const path = require('path');
const app = express();

// Définir le dossier public pour les fichiers statiques
app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.listen(5000, () => {
    console.log('Serveur démarré sur http://localhost:5000');
});

