import React from "react";
import { link } from "react-router-dom";
import Avatar from "../Liste/Avatar";
import Card from "../Liste/Card";

function Prof({ prof }){
    return(
        <li>
            <Card>
                <div>
                    <Avatar image={prof.image} alt={prof.nom}/>
                </div>

                <div>
                    <h2>{prof.nom}</h2>
                    
                </div>
            </Card>
        </li>
    )
}

export default Prof;