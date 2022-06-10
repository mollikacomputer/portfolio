import React from "react";
import { Link } from "react-router-dom";
import PortfolioPic from '../assets/portfolio2.jpg';
import Resume from '../assets/Resume.pdf';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import TypewriterComponent from "typewriter-effect";



const Hero = () => {
    const resumeTostify = () =>{
        toast('Resume Download Successfully');
    }
      
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={PortfolioPic}
          className="max-w-sm rounded-lg shadow-2xl" alt="ProfolePic"
        />
        <div>
          <h2 className="text-5xl font-bold mb-4"> Ranjit Kumar Mandal </h2>
          <p> Jr. Full-Stack Developer </p>
          <p className="py-6">
           I'm Ranjit Kumar Mandal, Junior Full-Stack Web Developer. My passion is web development.
           </p>
          
          <div className="text-5xl mb-4" >
           <TypewriterComponent
           onInit={(typewriter) =>{
            typewriter.typeString(' <span style="color: #27ae60;"> Full Stack Developer</span> ')
            .pauseFor(1000)
            .deleteAll()
            .typeString('Front End <span style="color: #27ae60;">Developer</span>')
            .pauseFor(1000)
            .deleteAll()
            .typeString('<span style="color: #27ae60;">Website Developer</span>')
            .pauseFor(1000)
            .start();
           } }
           />
           </div>
          <button className="btn btn-primary mr-6">Hire Me</button>
          <button onClick={resumeTostify} className="btn btn-primary"> <Link to={Resume} target="_blank" download>Download Resume</Link> </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
