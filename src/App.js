import "./App.css";
import { Route, Switch } from "react-router";
import Jam3yaList from "./Components/Jam3yaList";
import Home from "./Components/Home";
import Jam3yaDetail from "./Components/Jam3yaDetail";
import Nav from "./Components/Nav";
import Jam3yaItem from "./Components/Jam3yaItem";
import SignInSignUpForm from "./Components/SignInSignUpForm";
function App() {
  return (
    <div className="App">
      

      <Switch>
        <Route path="/jam3yaList/:jam3yaSlug">
          <Jam3yaDetail />
        </Route>
        <Route path="/SignInSignUpForm">
          <SignInSignUpForm />
        </Route>
        <Route path="/jam3yaList">
          <Jam3yaList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
