import logo from './logo.svg';
import './App.css';
import Parallax from './components/Parallax';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Parallax/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
