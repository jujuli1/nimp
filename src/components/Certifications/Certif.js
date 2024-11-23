import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Certif.css';

const Certif = ({ onClose }) => {
    const [images, setImages] = useState([]);

    // Charger les images depuis l'API
    useEffect(() => {
        axios.get('http://localhost:5000/api/images')
            .then(response => setImages(response.data))
            .catch(error => console.error('Erreur lors de la récupération des images:', error));
    }, []);

    return (
        <div className='certifs'>
            <div className="modal-overlay2">
                <div className="modal-content2">
                    <button onClick={onClose} className="close-button">X</button>
                    <h2>Mes certifications</h2>
                    <div className="images-container">
                        {images.map(image => (
                            <div key={image.id} className="image-item">
                                <h3>{image.title}</h3>
                                <img src={`https://jujuli1.github.io/nimp/images/${image.file_path}`} alt={image.title} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certif;
