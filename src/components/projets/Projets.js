import React, { useEffect, useState } from 'react';

import './projets.css'



const Projets = ({onClose}) => {

    
    return (
            <div className="modal-overlay2">
                <div className="modal-content2">
                    <button onClick={onClose} className="close-button">X</button>
                    <a href='https://jujuli1.github.io/weather/' >
                   <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/The.Matrix.glmatrix.2.png/669px-The.Matrix.glmatrix.2.png' className='meteok' alt='matrix'/>     
                    </a>
                    
                    
                    </div>
                    
                    

                    
                    
            
        </div>
        
        
        
    );
};

export default Projets;