import Card from "../Card/Card";
import React from "react";
import ReactDOM from "react-dom";
import ProductItem from "../MenuItem/ProductItem";
import { Link } from "react-router-dom";


function createCard(data) {
    return (
        <Link to={"/detail/"+ data.key}>
            <span>
                <Card imgUrl={data.imgUrl}
                    imgAlt={data.imgAlt}
                    productName={data.productName}
                    desc={data.desc}
                    price={data.price}
                    freeShipping={data.freeShipping}
                    onSale={data.onSale}
                    saleRate={data.saleRate}
                    rate={data.rate}
                    key={data.id}
                    identifier={data.key}
                />
            </span>
        </Link>


    )
}

function Container() {

    const style = {
        width: "80%",
        margin: "auto"
    }

    return (
        <div style={style}>
            {ProductItem.map(createCard)}
        </div>
    )
}

export default Container;