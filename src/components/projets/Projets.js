import React, { useEffect, useState } from 'react';
import Tanya from '../../images/sorciere.png'
import Video from '../../images/three.mp4'
import Tri from '../../images/trijs.jpg'

import './projets.css'



const Projets = ({onClose}) => {

    
    return (
            <div className="modal-overlay2">
                <div className="modal-content2">
                    <button onClick={onClose} className="close-button">X</button>

                    <div className='projets'>

                    <a href='https://jujuli1.github.io/weather/' >
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/669px-The.Matrix.glmatrix.2.png' className='meteok' alt='matrix'/>     
                    </a>
                    <a href='https://jujuli1.github.io/trajao/' >
                   <img src={Tanya} className='meteok' alt='Tanya Rajaonarivelo dessin'/>     
                    </a>

                     {/* Ajout de la vidéo MKV avec une illustration */}
                     <video className="video" controls poster={Tri}>
                        <source src={Video} type="video/mp4" />
                        Votre navigateur ne supporte pas la lecture de vidéos MKV.
                    </video>

                    </div>
                    
                    
                    </div>
                    
                    

                    
                    
            
        </div>
        
        
        
    );
};

export default Projets;