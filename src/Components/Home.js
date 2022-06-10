import React from 'react';
import Comments from './Comments';
import Footer from './Common/Footer';
import Hero from './Hero';
import Projects from './Projects';
import Skill from './Skill';
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