import React from "react";
import Jam3yaList from "./Jam3yaList";
import userAuthStore from "../Store/userAuthStore";
import SignInSignUpForm from "./SignInSignUpForm";
function Home() {
  return (
    <div>
          
      {userAuthStore.user === null ? <SignInSignUpForm/> : <h1>Logged In</h1>}
    </div>
  );
}

export default Home;
