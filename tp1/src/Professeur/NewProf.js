import React, {useState} from "react";
import "./NewProf.css"

function NewProf({addresseMethode}){
    const [saisiePName, setSaisiePrenom] = useState("")
    const [saisieName, setSaisieNom] = useState("")
    const [saisieImg, setSaisieImg] = useState("")
    const date1 = "1/3/2023";
    const [saisieDate, setSaisieDate] = useState(date1)

    function addNewProf(event){
        event.preventDefault();
        const newProf = {
            id: "p#",
            prenom: saisiePName,
            nom: saisieName,
            date: saisieDate,
            image: saisieImg,
            Cours: ["Aucun cours"] 
        };

        if(saisiePName === "" || saisieName === ""){
            alert("Manque un ou plusieurs input")
            return;
        }
        addresseMethode(newProf)
        setSaisiePrenom("")
        setSaisieNom("")
        setSaisieDate(date1)
        setSaisieImg("")
    }

    function saisiePrenomHandler(event){
        setSaisiePrenom(event.target.value)
    }

    function saisieNomHandler(event){
        setSaisieNom(event.target.value)
    }

    function saisieDateHandler(event){
        setSaisieDate(event.target.value)
    }

    function saisieImgHandler(event){
        setSaisieImg(event.target.value)
    }

    return(
        <form onSubmit={addNewProf} >
            <label>Prenom</label>
            <input type="text" value={saisiePName} onChange={saisiePrenomHandler}/>
            <label>Nom</label>
            <input type="text" value={saisieName} onChange={saisieNomHandler}/>
            <label>Date</label>
            <input type="text" value={saisieDate} onChange={saisieDateHandler}/>
            <label>Photo (Hyperlink)</label>
            <input type="text" value={saisieImg} onChange={saisieImgHandler}/>
            <button type="submit">Ajouter professeur</button>
        </form>
    );
}

export default NewProf;