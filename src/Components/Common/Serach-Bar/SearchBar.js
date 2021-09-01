import React from "react";
import "./SearchBar.css";

import { SearchButton } from "../Buttons/Buttons";


const SearchBar = props => {
    return (
        <div className={props.className}>
            <input type="text"
                placeholder="Search for..."
                className="input-bar"
                autoComplete="off"
            />
            <SearchButton className="search-button"/>
        </div>)
}

export default SearchBar;