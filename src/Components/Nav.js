import React from "react";
import { Link } from "react-router-dom";
import userAuthStore from "../Store/userAuthStore";
import { observer } from "mobx-react-lite";
function Nav() {
  return (
    <nav className="navBar">
      <div>
        <div>
          <h3 className="logOut">
            
            <Link className="homeName" to="/">
              Home
            </Link>
            Welcome {userAuthStore.user ? userAuthStore.user.username : ""}
            {userAuthStore.user ? <button
              className="btn btn-inverse btn-primary"
              onClick={() => userAuthStore.logout()}
            >
              log out
            </button> : null}
            
          </h3>
        </div>
      </div>
    </nav>
  );
}

export default observer(Nav);
