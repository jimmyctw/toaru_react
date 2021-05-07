import React  from 'react';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Main = () => {
    return ( 
        <main className="main">
            <Switch>
                <Route exact path="/"　component={Home} />
                <Route exact path="/about" component={About} /> 
                <Route exact path="/team" component={Team} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </ main >

    );
}
 
export default Main;
