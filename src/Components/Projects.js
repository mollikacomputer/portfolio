import React from 'react';
import Project from './Project';

const Projects = () => {
    const productsData = [
        {
          id: 0,
          pic: `https://i.ibb.co/MsZKyrf/1car-parts.jpg`,
          name: "Countries",
          description:'description'
        },
        {
          id: 1,
          pic: `https://i.ibb.co/crnZxBx/2grocery-Dealer.jpg`,
          name: "Complete projects",
          description:'description'
        },
        {
          id: 2,
          pic: `https://i.ibb.co/4S9Jzg4/3private-tutor.jpg`,
          name: "happy clients",
          description:'description'
        },

      ];
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 my-16'>
                {
                productsData.map((projectInfo) => (
                  <Project key={projectInfo._id} projectInfo={projectInfo}></Project>
                ))}

        </div>
    );
};

export default Projects;