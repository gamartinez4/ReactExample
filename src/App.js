import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";
import HomeComp from "./Home/Home"
import AboutComp from "./About/About"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route exact path="/about" component={AboutComp}/>
        <Route exact path="/" component={HomeComp}/> 
        <Route exact path="/:dat1/:dat2" component={HomeComp}/>    
        </Switch>
      </div>
    </Router>
  );
}
