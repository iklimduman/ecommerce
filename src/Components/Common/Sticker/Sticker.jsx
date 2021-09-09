import reactDom from "react-dom";
import React from "react";
import "./Sticker.css";
import { MuiThemeProvider, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core";


const Shipping = () => {

    return (
        <div className="shipping-card">
            Free Shipping
        </div>
    )
}

const OnSale = () => {
    return (
        <div className="sale-card">
            On Sale
        </div>
    )
}

export {
    Shipping,
    OnSale
}