import React from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";


library.add(faCheckSquare , faCoffee);

const SearchBar = props => {
    return (
        <div className={props.className}>
            <input type="text"
                placeholder="Search for..."
                className="input-bar"
                autoComplete="off"
            />
            <button className="search-button">
            <FontAwesomeIcon icon="coffee" color="black"/>
            </button>
        </div>)
}

export default SearchBar;