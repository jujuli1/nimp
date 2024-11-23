import React from 'react';
import './Certif.css'

const Certif = ({ onClose }) => {
    return (
        <div className='certifs'>
            <div className="modal-overlay2">
            <div className="modal-content2">
                <button onClick={onClose} className="close-button">X</button>
                <p>coucou</p>
            </div>
        </div>
        </div>
    );
};

export default Certif;