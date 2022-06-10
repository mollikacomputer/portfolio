import React from 'react';
import Comments from './Comments';
import Footer from './Common/Footer';
import Hero from './Common/Hero';
import Projects from './Common/Projects';
import Skill from './Common/Skill';
import Status from './Status';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Skill/>
            <Status/>
            <Projects/>
            <Comments/>
            <Footer/>
        </div>
    );
};

export default Home;