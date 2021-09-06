import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "../Serach-Bar/SearchBar";
import { HomeButton, FavButton, ShoppingCartButton, ProfileButton } from "../Buttons/Buttons";

function Navbar() {

    const [count, setCount] = useState(0);

    return (
        // top navigation
        <div class="topnav">

            <div class="topnav-centered">
                <a href="#home" class="active">Logo</a>

            </div>
            <div>
                <SearchBar className="topnav-search" />
            </div>

            <div className="topnav-right">
                <div className="topnav-right-button">
                    <HomeButton />
                    <a>Home</a>
                </div>
                <div className="topnav-right-button">
                    <FavButton />
                    <a>My Favs</a>
                </div>
                <div className="topnav-right-button">
                    <ShoppingCartButton />
                    <a>Cart</a>
                </div>
                <div className="topnav-right-button">
                    <ProfileButton />
                    <a>My Account</a>
                </div>

            </div>

        </div>
    )
}

export default Navbar;