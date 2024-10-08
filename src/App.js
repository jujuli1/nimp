import logo from './logo.svg';
import './App.css';
import Parallax from './components/Parallax';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">


      <BrowserRouter>

      <Routes>
      <Route path="/contact" element={<Contact />} />  
      </Routes>
      <Parallax/>
      
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
