import React from 'react';
import './competences.css'

const competences = ({onClose}) => {
    return (
            <div className="modal-overlay2">
                <div className="modal-content2">
                    <button onClick={onClose} className="close-button">X</button>
                    <div className='dev'>

                        <div className='comps'>
                    <h3> Developpement</h3>
                    <p>Tailwind/CSS</p>
                    <p>React.js / Vue.js</p>
                    
                    <p>JavaScript/ Python</p>
                    </div>


                    <div className='bdd'>
                    <p>Postgres</p>
                    <p>SQL</p>
                    
                    </div>

                    <div className='outils'>
                        <p>GitHub</p>
                        <p>Firebase</p>
                        <p>VS Code</p>
                        <p>Render</p>
                        
                    </div>
                    </div>

                    <div className='pentst'>
                    <div className='comps'>
                        <h3>Sécurité</h3>
                    
                    <p>Linux/ Windows</p>
                    
                    <p>Metasploit</p>
                    <p>Burp Suite</p>
                    </div>


                    <div className='bdd'>
                    <p>Réseaux(Connaissance de base)</p>
                    <p>John The Ripper/ hashcat</p>
                    <p>Nmap</p>
                    </div>

                    <div className='outils'>
                        <p>Netcat / ssh</p>
                        
                    </div>
                    </div>
                    


                    
                    
            
        </div>
        </div>
        
        
    );
};

export default competences;