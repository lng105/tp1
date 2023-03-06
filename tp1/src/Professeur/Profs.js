import React from "react";
import ListeProf from "./ListeProf"

function Profs(){
    const profs = [
        {
            id: "p1",
            nom: "Prof 1",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/800px-SpongeBob_SquarePants_character.svg.png",
            Cours: "asdf"
        },
    ];
    return <ListeProf profs={profs} />;
}

export default Profs;