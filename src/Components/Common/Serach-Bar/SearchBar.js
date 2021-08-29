import React from "react";
import "./SearchBar.css";

const SearchBar = props => {
    return (
        <div className={props.className}>
            <input type="text"
                placeholder="Search for..."
                className="input-bar"
                autoComplete="off"
            />
            <button className="search-button">Search</button>
        </div>)
}

export default SearchBar;