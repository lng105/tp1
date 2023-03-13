import React, { useState } from "react";
import ListeCours from "./ListeCours";
import NewCours from "./NewCours"
import "./Cours.css"

function Cours(){
    const [cours, setCours] = useState([
        {
            id: "c1",
            titre:"Système d'exploitation Windows",
            discipline:"Informatique",
            etudiants: "60",
            debut: "01/01/23",
            fin: "06/06/23",
        },
        {
            id: "c2",
            titre:"Programmation orientée objet",
            discipline:"Informatique",
            etudiants: "90",
            debut: "01/01/23",
            fin: "06/06/23",
        },
        {
            id: "c3",
            titre:"Arithmétique et logique",
            discipline:"Informatique",
            etudiants: "80",
            debut: "01/01/23",
            fin: "06/06/23",
        },
        {
            id: "c4",
            titre:"Algorithmie et programmation",
            discipline:"Informatique",
            etudiants: "50",
            debut: "01/01/23",
            fin: "06/06/23",
        },
        {
            id: "c5",
            titre:"Programmation structurée",
            discipline:"Informatique",
            etudiants: "90",
            debut: "01/01/22",
            fin: "06/06/22",
        },
        {
            id: "c6",
            titre:"Programmation structurée",
            discipline:"Informatique",
            etudiants: "90",
            debut: "01/01/21",
            fin: "06/06/21",
        },
        {
            id: "c7",
            titre:"Programmation structurée",
            discipline:"Informatique",
            etudiants: "90",
            debut: "07/01/20",
            fin: "15/12/20",
        },
    ]);

    function ajouterCours(newCours){
        setCours(cours.concat(newCours));
    }

    
    const filterByCours = (debut)=>{
        setCours(cours.filter(cour=>{
            return cour.debut === debut;
        }))
    }

    const debuts = Array.from(
        new Set(cours.map((cour) => cour.debut))
    );

    return(
       <div>
            <NewCours addresseMethode={ajouterCours}/>
            <select onChange={e=>filterByCours(e.target.value)} className="center-text">
                <option value="" disabled selected>
                    Select session
                </option>
                {debuts.map(debut =>{
                    return <option key={debut}>{debut}</option>
                })}
            </select>
            <ListeCours cours={cours}/>
       </div>
    );
}

export default Cours;