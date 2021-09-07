import reactDOM from "react-dom";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import "./Card.css";
import { Shipping, OnSale } from "../Sticker/Sticker";

const useStyles = makeStyles({
    favButton: {
        color: "red",
        position: "absolute",
        fontSize: "40px",
        top: "-300px",
        right: "0%",
        left: "-5px",
        '&:hover': {
            color: "blue"
        }
    },
    cartButton: {
        position: "absolute",
        fontSize: "30px",
        color: "red",
        top: "-300px",
        left: "220px",
    }
})

const StarButton = () => {
    const styles = useStyles();

    return (
        <IconButton>
            <StarBorderIcon className={styles.cartButton} />
        </IconButton>
    )
}

const CartButton = () => {
    const styles = useStyles();

    return (
        <IconButton>
            <ShoppingCartIcon className={styles.cartButton} />
        </IconButton>
    )
}

function Card(props) {

    return (
        <div className="Card">

            <div className="Card-top">
                <img src={props.imgUrl} alt={props.imgAlt} className="imgClass" />
                <StarButton />
                {props.freeShipping ? <Shipping /> : null}
                {props.onSale ? <OnSale/> : null}
            </div>

            <div className="Card-bottom">
                <p>{props.productName}</p>
                <p>{props.desc}</p>
                <p>{props.price}</p>
                <button className="view-button">view</button>
            </div>

        </div>
    )
}

export default Card;