import React from "react";

const Project = ({projectInfo}) => {
  return (
    <div className="card bg-base-100">
      <figure>
        <img
          src={projectInfo.pic}
          alt="Album"
        />
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
