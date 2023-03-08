import React, {useState} from "react";

function NewProf({addresseMethode}){
    const [saisieName, setSaisieNom] = useState("")
    const [saisieImg, setSaisieImg] = useState("")

    function addNewProf(event){
        event.preventDefault();
        const newProf = {
            id: "p#",
            nom: saisieName,
            image: saisieImg,
        };


    }
}