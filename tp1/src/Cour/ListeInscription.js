import React from "react";
import Inscription from "./Inscription"

function ListeInscription(props){
    return(
        <ul>
            {props.inscriptions.map((inscription) =>(
                <Inscription key={inscription.id} inscription={inscription} />
            ))}
        </ul>
    )
}

export default ListeInscription;