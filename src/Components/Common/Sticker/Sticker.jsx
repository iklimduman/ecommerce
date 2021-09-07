import reactDom from "react-dom";
import React from "react";
import "./Sticker.css";

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