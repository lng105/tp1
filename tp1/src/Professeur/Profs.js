import React, {useState} from "react";
import ListeProf from "./ListeProf"

function Profs(){
    const [profs,setProf] = useState( [
        {
            id: "p1",
            nom: "Spongebob",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
            Cours: ["asdf","asdfasd"]
        },
        {
            id: "p2",
            nom: "Patrick",
            image: "https://th.bing.com/th/id/R.c733632231ad979f825730f0b502089d?rik=59Kt8vZ7oUhR3Q&riu=http%3a%2f%2f4.bp.blogspot.com%2f-uRAx82XGlTc%2fU3mnX_sF7II%2fAAAAAAAAff4%2fwxpvOdpZ9HE%2fs1600%2fPatrick.png&ehk=vPP%2fI2gPCMrZ%2bVQMVywe4o3eCDix1rIsQGfTAvXfZc8%3d&risl=&pid=ImgRaw&r=0",
            Cours: ["asdf"]
        },
        {
            id: "p3",
            nom: "Mr Krabs",
            image: "https://th.bing.com/th/id/OIP.x2suT9A78AgqkxPFC_gv7AHaIA?pid=ImgDet&w=474&h=512&rs=1",
            Cours: ["asdf"]
        },
        {
            id: "p4",
            nom: "Plankton",
            image: "https://th.bing.com/th/id/OIP.SAeX5xjWBzJMny9PiZr8swHaJ6?pid=ImgDet&w=474&h=634&rs=1",
            Cours: ["asdf"]
        },
    ]);
    function ajouterProf(newProf){
        setProf(profs.concat(newProf));
    }
    
    return (
        <div>
            <ListeProf profs={profs} />
        </div>
    );
}

export default Profs;