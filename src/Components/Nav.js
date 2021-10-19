import React from "react";
import { Link } from "react-router-dom";
import userAuthStore from "../Store/userAuthStore";
import { observer } from "mobx-react-lite";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div>
      
      <div >
      
      <h3 className = "logOut"> <Link className ="homeName" to="/">Home</Link>Welcome {userAuthStore.user.username} <button  className="btn btn-inverse btn-primary" onClick={() => userAuthStore.logout()}>log out</button></h3>
      
      
      </div>
      
    </div>
    </nav>
  );
}

export default observer(Nav);
