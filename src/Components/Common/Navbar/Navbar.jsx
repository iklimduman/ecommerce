import ReactDOM from "react-dom";
import React, { useState } from "react";
import MenuItems from "../MenuItem/MenuItem";
import "./Navbar.css";
import SearchBar from "../Serach-Bar/SearchBar";

function CreateMenuItem(data) {
    return (
        <a className={data.className} href={data.url}>
            {data.title}
        </a>)
}

function Navbar() {

    const [count, setCount] = useState(0);

    return (
        // top navigation
        <div class="topnav">

            <div class="topnav-centered">
                <a href="#home" class="active">Logo</a>
                
            </div>
            <div>
                <SearchBar className="topnav-search"/>
            </div>

            <div class="topnav-right">
                {MenuItems.map(CreateMenuItem)}
            </div>

        </div>
    )
}

export default Navbar;