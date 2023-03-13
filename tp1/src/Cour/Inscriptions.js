import React, {useState} from "react";
import ListeInscription from "./ListeInscription";
import NewInscription from "./NewInscription";

function Inscriptions(){
    const [inscriptions, setInscription] =useState([
        {
            id: "e1",
            prenom: "asdf",
            nom: "asdf",
            numAd: "1",
        },
        {
            id: "e2",
            prenom: "asdf",
            nom: "asdf",
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