import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Certif.css';
import thm from "../../images/thm.jpg"
import tp from "../../images/tp.jpg"

const Certif = ({ onClose }) => {

    const [enlargedImage, setEnlargedImage] = useState(null);
    const [enlargedImagetp, setEnlargedImagetp] = useState(null);

    const handleImageClick = (image) => {
        setEnlargedImage(image); // Affiche l'image cliquée en grand
        
    };

    const handleImageClicktp = (imagetp) => {
         // Affiche l'image cliquée en grand
        setEnlargedImagetp(imagetp);
    };

    const handleClose = () => {
        setEnlargedImage(null);
        setEnlargedImagetp(null); 
    };
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Récupérer les images depuis api
        fetch('https://nimp-1.onrender.com/api/images')
            .then(response => response.json())
            .then(data => setImages(data))
            .catch(error => console.error('Erreur de récupération des images', error));
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
                                
                                <img src={image.url} alt={image.title} onClick={() => handleImageClick(image)}/>
                                 </div>))}
                               {/* <div className='zoom'>
                                <img src={tp} className='imgCertTp' alt='tp' onClick={() => handleImageClicktp(tp)}/>
                                </div>
                                <div className='zoom'>
                                <img src={thm} className='imgCert' alt='thm' onClick={() => handleImageClick(thm)}/>
                                </div>*/} 
                                {enlargedImage && (
                <div className="enlarged-container" onClick={handleClose}>
                    <img src={enlargedImage.url} className="enlarged-img" alt={enlargedImage.title} />
                </div>
                
                
            )}

{enlargedImagetp && (
                <div className="enlarged-containertp" onClick={handleClose}>
                    <img src={enlargedImagetp} className="enlarged-imgtp" alt="Certification agrandie" />
                </div>
                
                
            )}
                                
                                
                                
                                {/*`https://jujuli1.github.io/nimp/images/${image.file_path}` */}
                            </div>
                        
                    </div>
                </div>
            </div>
        
    );
};

export default Certif;
