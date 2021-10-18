import React, {useState} from "react";
import Jam3yaList from "./Jam3yaList";
import userAuthStore from "../Store/userAuthStore";
import SignInSignUpForm from "./SignInSignUpForm";
import CreateJam3yaForm from "./CreateJam3yaForm"
import Nav from "./Nav"
function Home() {

    
  return (
    <div> 
      {userAuthStore.user === null ? <SignInSignUpForm/> : 
      <>
      <button>Create your Jam3ya</button>
      <Nav/> 
      {/* <CreateJam3yaForm/> dont delete it works*/}
      <Jam3yaList/>
      </>
      }
    </div>
  );
}

export default Home;
