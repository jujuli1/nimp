import React from 'react';
import '../App.css'
import foret from "../images/foret.png"
import Moine from "../images/moine.jpg"
const Parallax = () => {
    return (

        <div>

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
            <img src={foret}alt='foret'/>
            </div>
            
            

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
        
        <div className='slider'>
                <div className='item' style={{ "--position": 1, color: "rgba(22, 11, 119, 1)", fontSize: "70px", textShadow: "2px 2px 15px rgba(22, 11, 119, 1)" }}>JS</div>
                <div className='item' style={{ "--position": 3, color: "rgba(22, 11, 119, 1)", fontSize: "70px", textShadow: "2px 2px 15px rgba(22, 11, 119, 1)" }}>Python</div>
                <div className='item' style={{ "--position": 2, color: "rgba(22, 11, 119, 1)", fontSize: "70px", textShadow: "2px 2px 15px rgba(22, 11, 119, 1)"  }}>SQL</div>
                
                <div className='item' style={{ "--position": 4, color: "rgba(22, 11, 119, 1)", fontSize: "70px", textShadow: "2px 2px 15px rgba(22, 11, 119, 1)" }}>FireBase</div>

             
                

                

                    
                    </div>
                    <div className='content'>

                
                <div className='model'><img className='moine' src={Moine}/></div>
            </div>
        </div>
        </div>

        
        
        </div>
        
    );
};

export default Parallax;