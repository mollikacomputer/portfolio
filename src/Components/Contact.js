import React from 'react';
import { ToastContainer } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className="h-screen flex justify-center items-center mt-6">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form className="card-body">
          <h2 className="text-3xl text-primary"> Contact Info </h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
            
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile No</span>
            </label>
            <input
              type="number"
              placeholder="Mobile Number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              
            />
          </div>
          
          <div className="form-control mt-2">
            <button className="btn btn-primary">Sent Contact Info</button>
          </div>
        </form>
      </div>
      {/* <ToastContainer /> */}
    </div>
        </div>
    );
};

export default Contact;