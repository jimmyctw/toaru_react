import React  from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return ( 
    <header className="header">
        <div className="header_logo">
            <NavLink to="/"  activeStyle={{ fontWeight: "bold", color: "#CC2936" }}>
                <img src={ process.env.PUBLIC_URL + '/assets/logo.png' } />
            </NavLink>
        </div>
        <nav className="nav" >
            <ul className="nav-list">
                <NavLink to="about"  activeStyle={{ fontWeight: "bold", color: "#CC2936" }}> 
                    <li>About</li>
                </NavLink>
                <NavLink to="team"  activeStyle={{ fontWeight: "bold", color: "#CC2936" }}> 
                    <li>Team</li>
                </NavLink>
                <NavLink to="contact"  activeStyle={{ fontWeight: "bold", color: "#CC2936" }}> 
                    <li>Contact</li>
                </NavLink>
            </ul>
        </nav> 
        </header>

    );
}
 
export default Header;
