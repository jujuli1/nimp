import logo from './logo.svg';
import './App.css';
import Parallax from './components/Parallax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Certif from './components/Certifications/Certif';

function App() {
  return (
    <div className="App">


      <BrowserRouter>

      <Routes>
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/certifications" element={<Certif />} />
      </Routes>
      
       
      <Parallax/>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
