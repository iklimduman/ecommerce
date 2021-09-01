import ReactDOM from "react-dom";
import React, { useState } from "react";
import MenuItems from "../MenuItem/MenuItem";
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

            <div class="topnav-right">
                <HomeButton />
                <a>Home</a>
                <FavButton />
                <a>My Favs</a>

                <ShoppingCartButton />
                <a>Shopping Cart</a>
                <ProfileButton />
                <a>My Account</a>
            </div>

        </div>
    )
}

export default Navbar;