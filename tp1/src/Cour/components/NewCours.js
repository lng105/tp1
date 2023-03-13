import React, {useState} from "react";
import "./NewCours.css"

function NewCours({addresseMethode}){
    const [saisieTitre, setSaisieTitre] = useState("");
    const [saisieDiscipline, setSaisieDiscipline] = useState("");
    const dateDebut = "01/01/23";
    const dateFin = "06/06/23";
    const [saisieDateDebut, setSaisieDateDebut] = useState(dateDebut);
    const [saisieDateFin, setSaisieDateFin] = useState(dateFin);

    function addNewCours(event){
        event.preventDefault();
        const newCours = {
            id: "c#",
            titre: saisieTitre,
            discipline: saisieDiscipline,
            etudiants: "0",
            debut: saisieDateDebut,
            fin: saisieDateFin
        };

        if(saisieTitre === "" || saisieDiscipline === ""){
            alert("Manque un ou plusieurs inputs")
            return;
        }
        addresseMethode(newCours)
        setSaisieTitre("")
        setSaisieDiscipline("")
        setSaisieDateDebut(dateDebut)
        setSaisieDateFin(dateFin)
    }

    function saisieTitreHandler(event){
        setSaisieTitre(event.target.value)
    }

    function saisieDisciplineHandler(event){
        setSaisieDiscipline(event.target.value)
    }

    function saisieDateDebutHandler(event){
        setSaisieDateDebut(event.target.value)
    }

    function saisieDateFinHandler(event){
        setSaisieDateFin(event.target.value)
    }

    return(
        <form onSubmit={addNewCours}>
            <label>Titre</label>
            <input type="text" value={saisieTitre} onChange={saisieTitreHandler}/>
            <label>Discipline</label>
            <input type="text" value={saisieDiscipline} onChange={saisieDisciplineHandler}/>
            <label>Date Debut</label>
            <input type="text" value={saisieDateDebut} onChange={saisieDateDebutHandler}/>
            <label>Date Fin</label>
            <input type="text" value={saisieDateFin} onChange={saisieDateFinHandler}/>
            <button type="submit">Ajouter nouveau cours</button>
        </form>
    );
}

export default NewCours;