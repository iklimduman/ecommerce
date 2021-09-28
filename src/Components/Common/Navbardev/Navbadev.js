import './Navbardev.css';

import React, { useState, useEffect, useRef } from 'react';
import { HomeButton, FavButton, ShoppingCartButton, ProfileButton } from "../Buttons/Buttons";
import MenuIcon from '@mui/icons-material/Menu';

import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles({
    text: {
        color: "rgb(24,0,67) !important",
        cursor: "pointer",
    }
});

function Navbardev() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    
    return (
        <Navbar>
            <input type="text" placeholder="type something" className="input-field" />
            {screenWidth < 1000 ? <NavItem icon={<MenuIcon />}>
                <DropdownMenu></DropdownMenu>
            </NavItem> : <LargeMenu />}

        </Navbar>
    );
}

function Navbar(props) {

    return (
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);

    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>

            {open ? props.children : null}
        </li>
    );
}

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);


    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        );
    }

    return (
        <div className="dropdown" style={{ height: menuHeight }}>

            <div className="menu">
                <DropdownItem><div>
                    <HomeButton />
                    <a>Home</a>
                </div></DropdownItem>
                <DropdownItem>
                <div>
                    <FavButton />
                    <a>My Favs</a>
                </div>
                </DropdownItem>
                <DropdownItem>
                <div>
                    <ShoppingCartButton />
                    <a>My Shopping Cart</a>
                </div>
                </DropdownItem>
                <DropdownItem>
                <div>
                    <ProfileButton />
                    <a>My Account</a>
                </div>
                </DropdownItem>

            </div>

        </div>
    );
}

function LargeMenu() {

    const classes = useStyles();
    const className = clsx(classes.text);

    return (<div className="large-menu">
        <ul>
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
    </div>)
}

export default Navbardev;
