import React from "react";
import logo from "../Image/momo.png"

import "./Accueil.css"

function Accueil(){
    return(
        <div>
        <img src={logo} alt="Logo du cegep Momo" width="400" height="500"/>
        <p className="center-text">
            Dans ce site, on offre les listes des cours et des professeurs du College Momo.
            <ul>
                <li>
                    Page cours: Offre la liste des cours de la session actuelle et filtre la liste de cours des sessions precedente.
                </li>
                <li>
                    Page professeurs: Offre la liste des professeurs enseignant au College et offre la creation d'un nouveau prof.
                </li>
            </ul>
        </p>
        </div>
    );
}

export default Accueil;