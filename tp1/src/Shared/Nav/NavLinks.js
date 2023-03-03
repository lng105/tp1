import React from "react";
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

function NavLinks(props){
    return <ul className="nav-links">
    <li>
        <NavLink to="/" exact>College #1</NavLink>
    </li>
    <li>
        <NavLink to="/">Cours</NavLink>
    </li>
    <li>
        <NavLink to="/">Professeurs</NavLink>
    </li>
    </ul>
};

export default NavLinks