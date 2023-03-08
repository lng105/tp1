import React from "react";
import { link } from "react-router-dom";
import Cours from "../Cours/Cours";
import Avatar from "../Liste/Avatar";
import Card from "../Liste/Card";
import "./Prof.css"


function Prof({ prof }){
    return(
        <li className="user-item">
            <Card className="user-item_content">
                <div>
                    <Avatar image={prof.image} alt={prof.nom}/>
                </div>

                <div className="user-item__info">
                    <h2>{prof.nom}</h2>
                    {prof.Cours.map((test) =>{
                        return <h3>{test}</h3>
                    })}
                </div>
            </Card>
        </li>
    )
}

export default Prof;