import React from 'react';
import Comments from './Comments';
import Hero from './Common/Hero';
import Skill from './Common/Skill';
import Status from './Status';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Skill/>
            <Status/>
            <Comments/>
        </div>
    );
};

export default Home;