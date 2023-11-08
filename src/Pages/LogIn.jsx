import React from "react";
import DF from "../Images/DF.png";
import "../Pages/LogIn.css";
import Navbar from "../Components/Navbar";

const LogIn = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section login__bg">
        <div className="columns is-centered">
          <div className="column is-one-third">
            <div className="box">
              {/* <div className="has-text-centered">
                <img src={DF} alt="Logo" className="login-logo" />
              </div> */}
              <h1 className="title has-text-centered">Login</h1>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button className="button is-info is-fullwidth">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default LogIn;
