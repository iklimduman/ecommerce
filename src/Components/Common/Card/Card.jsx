import reactDOM from "react-dom";
import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import "./Card.css";
import { Shipping, OnSale } from "../Sticker/Sticker";
import Button from '@material-ui/core/Button';
import { Typography, Box } from "@material-ui/core";


const useStyles = makeStyles({
    starButton: {
        fontSize: "30px",
        color: "#E9DEFC",
        '&:hover': {
            fontSize: "32px",
            left: "218px"
        }
    }
})

const StarButton = () => {
    const styles = useStyles();

    const [isFav, setFav] = useState(true);

    const handleFav = () => {
        setFav(!isFav);
    }

    return (
        <IconButton onClick={handleFav}>
            {isFav ? <StarBorderIcon className={styles.starButton} /> : <StarIcon className={styles.starButton} />}

        </IconButton>
    )
}

function Card(props) {

    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '1.rem',
        cursor: 'default',
        '@media (min-width:600px)': {
            fontSize: '1.rem',
        },
        [theme.breakpoints.up('md')]: {
        },
    };

    theme.typography.body2 = {
        cursor: 'default'
    };

    const useStyles = makeStyles({
        textStyle: {
            textDecoration: props.onSale ? 'line-through' : null,
            float : 'left',
            marginRight : '5px',
            marginLeft : '3px'
        },
        divStyle :{
            overflow : 'hidden'
        }
    });

    const classes = useStyles();

    const ActualPrice = () => {

        if (props.onSale) {
            const newPrice = props.price - (props.price * props.saleRate / 100);

            return (
                <div className={classes.divStyle}>
                    <Typography variant="body2" className={classes.textStyle}>{props.price} </Typography>
                    <Typography variant="body2"> {newPrice}$</Typography>
                </div>)
        }

        else{
            return (<Typography variant="body2">{props.price}$</Typography>)
        }

    }

    return (
        <div className="Card">

            <div className="Card-top">
                <img src={props.imgUrl} alt={props.imgAlt} className="imgClass" />
                <div className="favIcon">
                    <StarButton />
                </div>
                {props.freeShipping ? <Shipping /> : null}
                {props.onSale ? <OnSale /> : null}
            </div>

            <div className="Card-bottom">
                <ThemeProvider theme={theme}>
                    <Box lineHeight={2}>
                        <Typography variant="h3">{props.productName}</Typography>
                        <Typography variant="body2">{props.desc}</Typography>
                        <ActualPrice />
                    </Box>

                </ThemeProvider>
            </div>

            <Button variant="contained" color="primary" className="view-button">
                View
            </Button>

        </div>
    )
}

export default Card;