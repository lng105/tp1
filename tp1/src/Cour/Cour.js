import React from "react";
import "./Cour.css"
import { Link } from "react-router-dom"

function Cour({ cour }){
    return(
        <li className="center-text">
            <Link to={`/${cour.id}/Inscription`}>
                <h2>{cour.discipline}: {cour.titre}</h2>
                <h2>Nombre d'étudiants : {cour.etudiants}</h2>
                <h2>Date: {cour.debut} - {cour.fin}</h2>
            </Link>
        </li>
    )
}

export default Cour;