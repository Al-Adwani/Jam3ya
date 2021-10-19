import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import userAuthStore from "../Store/userAuthStore";
import { useHistory } from "react-router-dom";

function SignInSignUpForm() {
      const history = useHistory();

  console.log(userAuthStore.user);
  const [userStatus, setUserStatus] = useState(false);
  const [signedIn, setSignIn] = useState({
    username: "",
    password: "",
  });
  const [signedUp, setSignUp] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleSignIn = (e) => {
    setSignIn({ ...signedIn, [e.target.name]: e.target.value });
  };
  const handleSignUp = (e) => {
    setSignUp({ ...signedUp, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
      userStatus === false
        ? userAuthStore.signIn(signedIn, history)
        : userAuthStore.signUp(signedUp, history);
    

  };

  return (
    <div className="SignInDiv" id ="SignIn"  >
      <h1 className = "welcomeHeader">Welcome to Jam3ya</h1>
      <h4 className = "welcomeHeader">Sign In with your UserName and Password</h4>
      <div className = "btnSign">
      <button className="btn btn-inverse btn-primary"
        onClick={() => {
          setUserStatus(false);
        }}
      >
        Sign In
      </button>
      <button className="btn btn-inverse btn-primary"
        onClick={() => {
          setUserStatus(true);
        }}
      >
        Create account
      </button>
      </div>
      {userStatus === false ? (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
          <input className="form-control"
            onChange={handleSignIn}
            name="username"
            placeholder="Enter UserName"
          />
          <input className="form-control"
            onChange={handleSignIn}
            name="password"
            placeholder="Password"
          />
          <button className="btn btn-inverse btn-primary"  type="submit">Submit</button>
        </form>
      ) : (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
          
          <input  className="form-control"
            onChange={handleSignUp}
            name="username"
            placeholder="Enter UserName"
          />
          <input className="form-control"
            onChange={handleSignUp}
            name="email"
            placeholder="E-Mail"
          />
          <input className="form-control"
            onChange={handleSignUp}
            name="password"
            placeholder="Password"
          />
          <button  type="submit" className="btn btn-inverse btn-primary">Submit</button>
        </form>
      )}
      <style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');
</style>
    </div>
  );
}

export default observer(SignInSignUpForm);
