import reactDom from "react-dom";
import React from "react";
import "./Sticker.css";
import { MuiThemeProvider, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";


const OnSale = () => {

    return (
        <div className="sale-card">
            <a>
                On Sale
            </a>
        </div>
    )
}

const Shipping = () => {
    return (
        <div className="shipping-card">
            <a>
                Free Shipping
            </a>
        </div>
    )
}

export {
    Shipping,
    OnSale
}