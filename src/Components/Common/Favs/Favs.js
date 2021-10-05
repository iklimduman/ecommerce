import react from "react";
import FavList from "../FavList";

function createFavElement(data){
    return(
        <p>{data.identifier}</p>
    )
}

function Favs(){
    return (
        <div>
            <h2>This is favs page</h2>
            {FavList.map(createFavElement)}
        </div>
    )
}

export default Favs ;