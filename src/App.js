import { useState, Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './App.css';
import Parallax from './components/Parallax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Certif from './components/Certifications/Certif';
import Who from './components/Who/who';


import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Projets from './components/projets/Projets';


function Model() {
  
  const gltf = useLoader(GLTFLoader, '/Scene.gltf');

  return <primitive object={gltf.scene} />;
}

function App() {
  return (
    <div className="App">


      <BrowserRouter>

      <Routes>
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/certifications" element={<Certif />} />
      <Route path="/projets" element={<Projets />} />
      <Route path="/who" element={<Who />} />
      </Routes>
      
       
      <Parallax/>
      {/*<Canvas>

        <Suspense fallback={null}>
        <Model />


        </Suspense>
      </Canvas>*/}
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
