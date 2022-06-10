
import './App.css';
import Header from './Components/Common/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import Home from './Components/Home';
import { Routes, Route } from "react-router-dom";
import Comments from './Components/Comments';

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
