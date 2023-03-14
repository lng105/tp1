import React from "react";
import { NavLink } from 'react-router-dom'

import './NavLinks.css'

function NavLinks(props){
    return <ul className="nav-links">
    <li>
        <NavLink to="/Cours">Cours</NavLink>
    </li>
    <li>
        <NavLink to="/Profs">Professeurs</NavLink>
    </li>
    </ul>
};

export default NavLinks;