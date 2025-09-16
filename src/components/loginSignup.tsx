import React, { useState } from 'react'

export default function LoginSignup() {

  const[action,setAction] = useState("Login");


  return (
    <div className="login-signup">
      <div className="login-header">
        <div className="login-text">{action}</div>
        <div className="login-underline"></div>
      </div>
      <div className="login-inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="login-input">
            <label htmlFor="text">UserName</label>
            <input type="text" placeholder="enter your username..." />
          </div>
        )}
      </div>
      <div className="login-inputs">
        <div className="login-input">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email..." />
        </div>
      </div>
      <div className="login-inputs">
        <div className="login-input">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="enter your password" />
        </div>
      </div>

      {action === "Sign up" ? (<div></div>) : (<div className="forgot-password">
        <span>Forgot password?</span>
      </div>)}
      
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign up");
          }}
        >
          Sign up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
}
