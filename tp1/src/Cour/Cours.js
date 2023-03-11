import React, { useState } from "react";
import ListeCours from "./ListeCours";
import NewCours from "./NewCours"

function Cours(){
    const [cours, setCours] = useState([
        {
            id: "c1",
            titre:"Système d'exploitation Windows",
            discipline:"Informatique",
            etudiants: "60",
            debut: "01/01/23",
            fin: "06/06/23"
        },
        {
            id: "c2",
            titre:"Programmation orientée objet",
            discipline:"Informatique",
            etudiants: "90",
            debut: "01/01/23",
            fin: "06/06/23"
        },
        {
            id: "c3",
            titre:"Arithmétique et logique",
            discipline:"Informatique",
            etudiants: "80",
            debut: "1/01/23",
            fin: "06/06/23"
        },
        {
            id: "c4",
            titre:"Algorithmie et programmation",
            discipline:"Informatique",
            etudiants: "50",
            debut: "01/01/23",
            fin: "06/06/23"
        },
    ]);

    function ajouterCours(newCours){
        setCours(cours.concat(newCours));
    }

    return(
       <div>
            <NewCours addresseMethode={ajouterCours}/>
            <ListeCours cours={cours}/>
       </div>
    );
}

export default Cours;