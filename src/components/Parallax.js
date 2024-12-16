import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Modal from './Contact/Modale';
import Contact from './Contact/Contact';
import '../App.css'
import foret from "../images/foret.png"
import Moine from "../images/moine.jpg"
import Certif from './Certifications/Certif';
import Projets from './projets/Projets';
import Who from './Who/who';
import Competences from './Competences/competences';
const Parallax = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCertifOpen, setIsCertifOpen] = useState(false);
    const [isWhoOpen, setIsWhoOpen] = useState(false);
    const [isCompOpen, setIsCompOpen] = useState(false);
    const [isRealOpen, setIsRealOpen] = useState(false);

    {/*Modale contacte */}
    const handleModalOpen = () => {
        setIsModalOpen(true);
      };
    
      const handleModalClose = () => {
        setIsModalOpen(false);
      };

      {/* Modale certifications */}
      const openModal = () => {
        setIsCertifOpen(true);
    };

    const closeModal = () => {
      setIsCertifOpen(false);
    };

    {/* Modale who am i */}
    const openModalwho = () => {
      setIsWhoOpen(true);
  };

  const closeModalwho = () => {
    setIsWhoOpen(false);
  };

   {/* Modale compétences */}
   const openModalComp = () => {
    setIsCompOpen(true);
};

const closeModalComp = () => {
  setIsCompOpen(false);
};

 {/* Modale réalisations */}
 const openReal = () => {
  setIsRealOpen(true);
};

const closeReal = () => {
setIsRealOpen(false);
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

        {/** Décoration foret pour effet parallax */}
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

        {/** déco petite bulle */}
        <div className='stars'>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>


        {/** élément principale : animation élément tournant + lien github et linkedin + page contacte */}
        <div className='fond'>
        
        

          {/** élément tournant */}
          <div className='content'>
        <div className='slider'>
                <div className='item' style={{ "--position": 1, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }} >0</div>
                <div className='item' style={{ "--position": 3, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>O</div>
                <div className='item' style={{ "--position": 2, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>0</div>
                <div className='item' style={{ "--position": 5, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>O</div>
                <div className='item' style={{ "--position": 4, fontSize: "70px", textShadow: "2px 2px 15px rgba(255, 255, 255, 0.5)" }}>0</div>

             
                

                

                    
                </div>
                


        

        

                    

                    <div className='model'><img className='moine' src={Moine}/></div>
                
            </div>
            <div className='linkedin'><a href='https://www.linkedin.com/in/julien-lefevre-6bab8255'><img className='lkdn' src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a></div>
            <div className='github'><a href='https://github.com/jujuli1?tab=repositories'><img className='git' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/></a></div>
        </div>
        </div>

        {/**lien menu */}
           <div className='Link'>

           <div >
            <button className='Modalwho' onClick={openModalwho}>Whoami</button>
            {isWhoOpen && <Who onClose={closeModalwho} />}
        </div>

        <div >
            <button className='Modalcomp' onClick={openModalComp}>Compétences</button>
            {isCompOpen && <Competences onClose={closeModalComp} />}
        </div>
         

        <div >
            <button className='ModalCertif' onClick={openModal}>Mes certifications</button>
            {isCertifOpen && <Certif onClose={closeModal} />}
        </div>

        <div >
            <button className='ModalReal' onClick={openReal}>D'autre projets ...</button>
            {isRealOpen && <Projets onClose={closeReal} />}
        </div>

        <button
          
          className='join-bouton'
          onClick={handleModalOpen}
        >
          Me contacter
        </button>  

        

           </div>

           <div className="container">

      <div className="cup">

        <div className="top">
          <div className="vapour">
          <span style={{ "--i": 1 }}></span>
<span style={{ "--i": 3 }}></span>
<span style={{ "--i": 16 }}></span>
<span style={{ "--i": 5 }}></span>
<span style={{ "--i": 13 }}></span>
<span style={{ "--i": 20 }}></span>
<span style={{ "--i": 6 }}></span>
<span style={{ "--i": 7 }}></span>
<span style={{ "--i": 10 }}></span>
<span style={{ "--i": 8 }}></span>
<span style={{ "--i": 17 }}></span>
<span style={{ "--i": 11 }}></span>
<span style={{ "--i": 12 }}></span>
<span style={{ "--i": 14 }}></span>


            
            
          </div>
          <div className="circle">
            <div className="tea"></div>
          </div>
        </div>
      </div>
      </div>

           
    
        
        </div>
        
    );
};

export default Parallax;