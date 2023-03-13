import React from "react";
import "./Inscription.css"

function Inscription({inscription}){
    return(
        <li className="center-text">
            <h2>{inscription.prenom} {inscription.nom}</h2>   
            <h2>{inscription.numAd}</h2>
        </li>
    )
}

export default Inscription;