// import React from 'react'
import "./auth_style.scss";
import { useState } from "react";

const Auth = () => {
  const [isSignIn, setSign] = useState(false);
  return (
    <div className="main">
      {isSignIn ? (
        <div className="page">
          <div className="right">
            <div className="header">
              <h1>Sign In</h1>
            </div>
            <div className="hero">
              <div className="name">
                <span>Name: </span>
                <input type="text" />
              </div>
              <div className="number">
                <span>Phone: </span>
                <input type="text" />
              </div>
              <div className="password">
                <span>Password: </span>
                <input type="text" />
              </div>
            </div>
            <div className="send flex gap-8">
              <button className="btn ">Sign in</button>

              <h1>
                Already Part of Us?
                <button
                  className="ml-2 p-2"
                  onClick={() => {
                    setSign(!isSignIn);
                  }}
                >
                  LogIn
                </button>
              </h1>
            </div>
          </div>
          <div className="left">
            <h1>Become part of Ours search</h1>
          </div>
        </div>
      ) : (
        <div className="page">
          <div className="left">
            <h1>
              Welcome back !!, <br />
              Thank you for your time
            </h1>
          </div>
          <div className="right">
            <div className="header">
              <h1>LOGIN</h1>
            </div>
            <div className="hero">
              <div className="name">
                <span>Name: </span>
                <input type="text" />
              </div>
              <div className="number">
                <span>Phone: </span>
                <input type="text" />
              </div>
              <div className="password">
                <span>Password: </span>
                <input type="text" />
              </div>
            </div>
            <div className="send flex gap-8">
              <button className="btn">login</button>

              <h1>
                New Here?{" "}
                <button
                  className="ml-2 font-medium"
                  onClick={() => {
                    setSign(!isSignIn);
                  }}
                >
                  Sing in
                </button>
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
