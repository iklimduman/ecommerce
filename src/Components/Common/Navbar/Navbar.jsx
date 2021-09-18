import ReactDOM from "react-dom";
import React, { useState,useEffect } from "react";
import "./Navbar.css";
import SearchBar from "../Serach-Bar/SearchBar";
import { HomeButton, FavButton, ShoppingCartButton, ProfileButton } from "../Buttons/Buttons";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';
import { toggleButtonClasses } from "@mui/material";

const useStyles = makeStyles({
    text: {
        color: "rgb(24,0,67) !important",
    }
});

function Navbar() {

    const [count, setCount] = useState(0);
    const [toggleMenu, setToggleMenu] = useState(false)

    const classes = useStyles();
    const className = clsx(classes.text);

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);
    }

    return (
        // top navigation
        <div className="topnav">

            <div class="topnav-centered">
                <a href="#home" class="active">Logo</a>

            </div>
            <div>
                <SearchBar className="topnav-search" />
            </div>

            <ul className="topnav-right">
                <li>
                    <button className="burger" onClick={toggleNav}>btn</button>
                </li>
                <li className="topnav-right-button">
                    <HomeButton />
                    <a className={className}>Home</a>
                </li>
                <li className="topnav-right-button">
                    <FavButton />
                    <a className={className}>My Favs</a>
                </li>
                <li className="topnav-right-button">
                    <ShoppingCartButton />
                    <a className={className}>Cart</a>
                </li>
                <li className="topnav-right-button">
                    <ProfileButton />
                    <a className={className}>My Account</a>
                </li>

            </ul>


        </div>
    )
}

export default Navbar;