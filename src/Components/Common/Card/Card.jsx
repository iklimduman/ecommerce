import reactDOM from "react-dom";
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import "./Card.css";
import { Shipping, OnSale } from "../Sticker/Sticker";
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

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
        color: "#E9DEFC",
        top: "-300px",
        left: "220px",
    }
})




const StarButton = () => {
    const styles = useStyles();
    
    const [isFav , setFav] = useState(true);

    const handleFav = () => {
        setFav(!isFav);
    }

    
    return (
        <IconButton onClick={handleFav}>
        {isFav ? <StarBorderIcon className={styles.cartButton} /> : <StarIcon className={styles.cartButton}/>}
            
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
                {props.onSale ? <OnSale /> : null}
            </div>

            <div className="Card-bottom">
                <p>{props.productName}</p>
                <p>{props.desc}</p>
                <p>{props.price}$</p>

            </div>
            <Button variant="contained" color="primary" className="view-button">
                View
            </Button>

        </div>
    )
}

export default Card;