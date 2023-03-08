import React from "react";
import "./Avatar.css"

function Avatar(props){
    return(
        <div className={`avatar ${props.className}`} style={props.style}>
            <img
            src={props.image}
            alt={props.alt}
            style={{ width: 200, height: 200}}
            />
        </div>
    )
}

export default Avatar;