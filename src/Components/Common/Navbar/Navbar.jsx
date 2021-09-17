import ReactDOM from "react-dom";
import React, { useState } from "react";
import "./Navbar.css";
import SearchBar from "../Serach-Bar/SearchBar";
import { HomeButton, FavButton, ShoppingCartButton, ProfileButton } from "../Buttons/Buttons";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles({
    text : {
        color : "rgb(24,0,67) !important",
    }
});

function Navbar() {

    const [count, setCount] = useState(0);

    const classes = useStyles();
    const className = clsx(classes.text) ;

    return (
        // top navigation
        <div className="topnav">

            <div class="topnav-centered">
                <a href="#home" class="active">Logo</a>

            </div>
            <div>
                <SearchBar className="topnav-search" />
            </div>

            <div className="topnav-right">
                <div className="topnav-right-button">
                    <HomeButton />
                    <a className={className}>Home</a>
                </div>
                <div className="topnav-right-button">
                    <FavButton />
                    <a className={className}>My Favs</a>
                </div>
                <div className="topnav-right-button">
                    <ShoppingCartButton />
                    <a className={className}>Cart</a>
                </div>
                <div className="topnav-right-button">
                    <ProfileButton />
                    <a className={className}>My Account</a>
                </div>

            </div>

        </div>
    )
}

export default Navbar;