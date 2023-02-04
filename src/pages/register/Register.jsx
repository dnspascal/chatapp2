import React from "react";
import "./Register.css";
function Register() {
  return (
    <div className="register">
      <div className="form">
        <div className="avatar">
          <img src='chatapp.jpg' alt="chatapp" className="image" />
        </div>
        <div className="signUp">
          <h2>Sign Up to <i>BOB</i></h2>
        </div>
        <div className="formContent">
          <form action="" className="inputItems">
            <div className="item">
              <label>Firstname </label>
              <input id='name' type="text" />
            </div>
            <div className="item">
              <label>Surname </label>
              <input type="text" />
            </div>
            <div className="item">
              <label>Username </label>
              <input type="text" />
            </div>
            <div className="item">
              <label>Phonenumber </label>
              <input type="text" />
            </div>
            <div className="item">
              <label>Email </label>
              <input type="email" />
            </div>
            <div className="item">
              <label>Password </label>
              <input type="password" />
            </div>
            <div className="item">
              <label>Confirm password </label>
              <input type="password" />
            </div>
            <div className="submitDiv">
              <input type="submit" className="submit" onClick={()=>alert('hi')} value="SIGN UP" />
            </div>
          </form>

          <span>
            Already have an account? <i className="i">Sign in</i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
