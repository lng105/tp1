import React from "react";
import Cour from "./Cour";

function ListeCours(props){
    return(
        <ul>
            {props.cours.map((cour) =>(
                <Cour key={cour.id} cour={cour} />
            ))}
        </ul>
    )
}

export default ListeCours;