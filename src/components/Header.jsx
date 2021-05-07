import React  from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Header = () => {
    return ( 
    <header className="header">
        <div className="header_logo">
            <Link to="/">
                <img src={ process.env.PUBLIC_URL + '/assets/logo.png' } />
            </Link>
        </div>
        <nav className="nav">
            <ul className="nav-list">
                <Link to="about"> 
                    <li>About</li>
                </Link>
                <Link to="team"> 
                    <li>Team</li>
                </Link>
                <Link to="contact"> 
                    <li>Contact</li>
                </Link>
            </ul>
        </nav> 
        </header>

    );
}
 
export default Header;
