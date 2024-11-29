import React from 'react';
import  './who.css'

const who = ({onClose}) => {
    return (
        <div>
            <div className="modal-overlay2">
                <div className="modal-content2">
                    <button onClick={onClose} className="close-button">X</button>
                    <div className='presentationText'>

                        
                        <h2 className='bienvenue'>Bienvenue!</h2>
                        <p>Je m'apelle Julien LEFEVRE, je suis dev' junior et ceci est mon portfolio .</p>
                        <p>Attiré par le monde du numérique, je suis en constant apprentissage dans ce domaine qui me passionne, 
                           que cela soit en terme de développement, de sécurité ou d'IA. J'ai pour ambition de m'y reconvertir et,
                           en plus d'un travail en autonomie, j'ai suivit plusieurs formations qui m'on ammené aujourd'hui à être à la recherche
                           d'expériences professionnelles afin de concrétiser cette reconversion. Vous trouverez sur cette appli, 
                           les différentes <b>certifications</b> obtenue, des liens utiles et surtout, l'expression de ce que je sais faire en React.
                        </p>

                        <p>Je suis également bénéficiaire de <b>l'emploi franc</b>, adapté à un contrat de professionnalisation, il permet
                            à l'entreprise de percevoir des aides à l'embauche. </p>
                        <p> Je vous remercie de l'attention porté a mon humble réalisation, et je vous laisse maintenant parcourir les 
                            différentes sections de ce projet qui est, surement à jamais, en évolution,
                        </p>
                        <p> Cordialement.</p>
                    </div>
                    
            
        </div>
        </div>
        </div>
    );
};

export default who;