import reactDom from "react-dom";
import React from "react";

import "./Detail.css";
import ProductItem from "../MenuItem/ProductItem";

import { Typography } from "@material-ui/core";

export default function Detail(props) {

    var target = props.match.params.key;

    var targetObj = ProductItem.find(key => {
        return key === target;
    })

    var data = ProductItem[target];

    const PriceTag = () => {
        if (data.onSale) {
            const newPrice = data.price - (data.price * data.saleRate / 100);

            return (
                <div>
                    <div>
                        <Typography variant="body2">{data.price} </Typography>
                        <Typography variant="body2"> {newPrice}$</Typography>
                    </div>

                    <div>
                        <a>-{data.saleRate}%</a>
                    </div>
                </div>)
        }

        else {
            return (<Typography variant="body2">{data.price}$</Typography>)
        }
    }

    return (
        <div className="container">
            <div className="img-view">
                <img src={data.imgUrl} alt={data.imgAlt} style={{'width':'300px'}}/>
            </div>
            <div className="detail-view">
                <p>{data.productName}</p>
                <p>{data.desc}</p>
                <div className="price">
                    <PriceTag />
                </div>
            </div>
        </div>
    )
}