import React from "react";
import Prof from "./Prof";
import Card from "../../Liste/Card"
import "./ListeProf.css"

function ListeProf(props){
    if(props.profs.length === 0){
        return(
            <div className="center">
                <Card>
                    <h2>Aucun Professeur</h2>
                </Card>
            </div>
        )
    }

    return(
        <ul className="users-list">
            {props.profs.map((prof) =>(
                <Prof key={prof.id} prof={prof} />
            ))}
        </ul>
    )
}

export default ListeProf;