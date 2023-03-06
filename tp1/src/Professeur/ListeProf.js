import React from "react";
import Prof from "./Prof";
import Card from "../Liste/Card"

function ListeProf(props){
    if(props.Profs.length === 0){
        return(
            <div>
                <Card>
                    <h2>Aucun Professeur</h2>
                </Card>
            </div>
        )
    }

    return(
        <ul>
            {props.profs.map((prof) =>(
                <Prof key={prof.id} prof={prof} />
            ))}
        </ul>
    )
}

export default ListeProf;