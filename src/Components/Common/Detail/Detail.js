import reactDom from "react-dom";
import React from "react";
import { useState } from "react";

import "./Detail.css";
import ProductItem from "../MenuItem/ProductItem";
import StarRating from "../StarRating/StarRating";
import { IconButton } from "@mui/material";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

function createDetail(data) {
    return (
        <li>
            {data}
        </li>
    )
}

export default function Detail(props) {

    const [quantity, setQuantity] = useState(1);

    var target = props.match.params.key;

    var targetObj = ProductItem.find(key => {
        return key === target;
    })

    var data = ProductItem[target - 1];

    var detailObject = data.details;

    var keys = Object.keys(detailObject);

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const setStyles = makeStyles({
        textStyle: {
            'padding-right': '10px',
            'font-family': '"Source Sans Pro", sans-serif',
            'font-size': '19px',
            'color': '#47424d'
        },
        percentageStyle: {
            'padding-right': '10px',
            'padding-left': '10px',
            'font-family': '"Source Sans Pro", sans-serif',
            'font-size': '19px',
            'color': '#47424d'
        }
    });

    const classes = setStyles();

    const PriceTag = () => {
        if (data.onSale) {
            const newPrice = data.price - (data.price * data.saleRate / 100);

            return (
                <div>
                    <div className="price-div">
                        <span style={{
                            'text-decoration': 'line-through',
                            'padding-right': '10px',
                            'font-family': '"Source Sans Pro", sans-serif',
                            'font-size': '19px',
                            'color': '#76678a'
                        }}>
                            ${(data.price).toFixed(2)}
                        </span>
                        <span className={classes.textStyle}> ${(newPrice).toFixed(2)}</span>
                        <div className="percentage">
                            <a className={classes.percentageStyle}>-{data.saleRate}%</a>
                        </div>
                    </div>
                </div>)
        }

        else {
            return (<span>{(data.price).toFixed(2)}$</span>)
        }
    }

    return (
        <div className="container">
            <div className="img-view">
                <img src={data.imgUrl} alt={data.imgAlt} style={{ 'width': '350px', 'border-radius': '6px', 'margin': '10px' }} />
            </div>
            <div className="detail-view">
                <p className="product-name">{data.productName}</p>
                <p className="product-description">{data.desc}</p>
                <StarRating rate={data.rate} />
                <hr className="horizontal-line" />
                <div className="price">
                    <PriceTag />
                </div>
                <div className="sale-container">
                    <div>
                        <button className="quantity-button" onClick={handleIncrease}>+</button>
                        <span>{quantity}</span>
                        <button className="quantity-button" onClick={handleDecrease}>-</button>
                    </div>
                </div>
                <div className="cart-container">
                    <button className="cart-button">
                        Add to Cart
                    </button>
                    <div className="star-container">
                        <IconButton className="icon-button">
                            <StarBorderIcon className="star-border-icon" />
                        </IconButton>
                    </div>

                    {/*
                    <div className="detail-container">
                        <ul>
                            {Object.values(detailObject).map(createDetail)}
                        </ul>
                    </div>
                    */}
                </div>
                <div className="detail-container">
                    <span>
                        Details
                    </span>
                    <ul>
                        {Object.values(detailObject).map(createDetail)}
                    </ul>
                </div>
                <div className="detail-button-container">
                    <button className="show-details-button">Show All Details</button>

                </div>
            </div>
        </div>
    )
}