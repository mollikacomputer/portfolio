import React from "react";
import { Link } from "react-router-dom";


const Project = ({projectInfo}) => {
  return (
    <div className="card bg-base-100">
      <figure>
        <a href={projectInfo.liveLink} target="_blank" >
        <img
          src={projectInfo.pic}
          alt="Album"
          style={{height: "250px"}}
        />
        </a>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {projectInfo.name} </h2>
        <p> {projectInfo.description} </p>
        <div className="card-actions justify-start">
          <button className="btn  btn-primary">Hire me</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
