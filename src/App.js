
import './App.css';
import Header from './Components/Common/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
function App() {
  return (
    <Header >
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      
    </Header>
    
  );
}

export default App;
