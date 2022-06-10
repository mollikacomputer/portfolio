
import './App.css';
import Header from './Components/Common/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Common/Projects';
function App() {
  return (
    <Header >
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/home' element={<Home/> } />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      
    </Header>
    
  );
}

export default App;
