import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from './Contact/Modale';
import Contact from './Contact/Contact';
import '../App.css'
import foret from "../images/foret.png"
import Moine from "../images/moine.jpg"
const Parallax = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };
    return (

        <div>
            

               
         {/* affichage modale */}
      <Modal show={isModalOpen} onClose={handleModalClose}>
      
      <Contact onClose={handleModalClose} /> 
      </Modal>  

           <div className='header'>
            <h2>Relaxing...</h2>
        </div> 

        <div className='content'>

            <div className='foret'>
            <img src={foret}alt='foret'/>
            </div>
            <div className='foret2'>
            <img src={foret}alt='foret'/>
            </div>
            <div className='foret3'>
            <img src={foret}alt='foret'/>
            </div>
            <div className='foret4'>
            <img src={foret}alt='foret'/> </div>
            
            
            
            
            
            

        </div>

        <div className='stars'>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>

        <div className='fond'>
        

        {/** élément tournant */}
        <div className='slider'>
                <div className='item' style={{ "--position": 1, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>JS</div>
                <div className='item' style={{ "--position": 3, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>Python</div>
                <div className='item' style={{ "--position": 2, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>SQL</div>
                <div className='item' style={{ "--position": 5, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>React</div>
                <div className='item' style={{ "--position": 4, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>FireBase</div>

             
                

                

                    
                    </div>
                    <div className='content'>

                
                <div className='model'><img className='moine' src={Moine}/></div>
            </div>
            <div className='linkedin'><a href='https://www.linkedin.com/in/julien-lefevre-6bab8255'><img className='lkdn' src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a></div>
            <div className='github'><a href='https://github.com/jujuli1?tab=repositories'><img className='git' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a></div>
        </div>
        </div>

        {/**lien Me joindre */}
           
    <button
          
          className='join-bouton'
          onClick={handleModalOpen}
        >
          Me contacter
        </button>   
        
        </div>
        
    );
};

export default Parallax;