import React, {useState} from "react";

function NewInscription({addresseMethode}){
    const [saisiePrenom, setSaisiePrenom] = useState("");
    const [saisieNom, setSaisieNom] = useState("");
    const [saisieNum, setSaisieNum] = useState("");

    function addNewInscription(event){
        event.preventDefault();
        const newInscription = {
            id: "e#",
            prenom: saisiePrenom,
            nom: saisieNom,
            numAd: saisieNum
        };

        if(saisieNum === "1" || saisieNum === "2"){
            alert("Numero admission repete");
            return;
        }

        addresseMethode(newInscription)
        setSaisiePrenom("")
        setSaisieNom("")
        setSaisieNum("")
    }

    function saisiePrenomHandler(event){
        setSaisiePrenom(event.target.value)
    }

    function saisieNomHandler(event){
        setSaisieNom(event.target.value)
    }

    function saisieNumHandler(event){
        setSaisieNum(event.target.value)
    }

    return(
        <form onSubmit={addNewInscription}>
            <label>Prenom</label>
            <input type="text" value={saisiePrenom} onChange={saisiePrenomHandler}/>
            <label>Nom</label>
            <input type="text" value={saisieNom} onChange={saisieNomHandler}/>
            <label>Numero admission</label>
            <input type="text" value={saisieNum} onChange={saisieNumHandler}/>
            <button type="submit">Ajouter nouveau etudiant</button>
        </form>
    )
}

export default NewInscription