import React from "react";
import "./Inscription.css"

function Inscription({inscription}){
    return(
        <li className="center-text">
            <h2>Etudiant: {inscription.prenom} {inscription.nom}</h2>   
            <p>Numero admission: {inscription.numAd}</p>
        </li>
    )
}

export default Inscription;