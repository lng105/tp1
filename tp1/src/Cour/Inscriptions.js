import React, {useState} from "react";
import ListeInscription from "./ListeInscription";
import NewInscription from "./NewInscription";

function Inscriptions(){
    const [inscriptions, setInscription] =useState([
        {
            id: "e1",
            prenom: "Laurent",
            nom: "Nguyen",
            numAd: "1",
        },
        {
            id: "e2",
            prenom: "Ricky",
            nom: "Borby",
            numAd: "2",
        }
    ])

    function ajouterInscription(newInscription){
        setInscription(inscriptions.concat(newInscription));
    }

    return(
        <div>
            <NewInscription addresseMethode={ajouterInscription} />
            <ListeInscription inscriptions={inscriptions} />
        </div>
    )
}

export default Inscriptions