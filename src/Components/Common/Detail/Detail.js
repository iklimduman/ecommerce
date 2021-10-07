import reactDom from "react-dom";
import React from "react";
import { useState } from "react";

import "./Detail.css";
import ProductItem from "../MenuItem/ProductItem";
import StarRating from "../StarRating/StarRating";

import { Typography } from "@material-ui/core";

export default function Detail(props) {

    const [quantity, setQuantity] = useState(1);

    var target = props.match.params.key;

    var targetObj = ProductItem.find(key => {
        return key === target;
    })

    var data = ProductItem[target - 1];

    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }

    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const PriceTag = () => {
        if (data.onSale) {
            const newPrice = data.price - (data.price * data.saleRate / 100);

            return (
                <div>
                    <div className="price-div">
                        <span style={{
                            'text-decoration': 'line-through',
                            'padding-right': '10px'
                        }}>
                            ${(data.price).toFixed(2)}
                        </span>
                        <span> ${(newPrice).toFixed(2)}</span>
                        <div className="percentage">
                            <a>-{data.saleRate}%</a>
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
                    <button className="quantity-button" onClick={handleIncrease}>+</button>
                    <span>{quantity}</span>
                    <button className="quantity-button" onClick={handleDecrease}>-</button>
                    <button>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}