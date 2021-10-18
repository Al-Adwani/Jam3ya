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
        : userAuthStore.signUp(signedUp);
    

  };

  return (
    <div>
      <button
        onClick={() => {
          setUserStatus(false);
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          setUserStatus(true);
        }}
      >
        Sign Up
      </button>

      {userStatus === false ? (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSignIn}
            name="username"
            placeholder="Enter UserName"
          />
          <input
            onChange={handleSignIn}
            name="password"
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleSignUp}
            name="username"
            placeholder="Enter UserName"
          />
          <input
            onChange={handleSignUp}
            name="email"
            placeholder="E-Mail"
          />
          <input
            onChange={handleSignUp}
            name="password"
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      )}
      <button onClick={() => userAuthStore.logout()}>log out</button>
    </div>
  );
}

export default observer(SignInSignUpForm);
