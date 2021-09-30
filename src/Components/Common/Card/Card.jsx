import reactDOM from "react-dom";
import React, { useEffect, useState, useRef} from "react";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import "./Card.css";
import { Shipping, OnSale } from "../Sticker/Sticker";
import Button from '@material-ui/core/Button';
import { Typography, Box } from "@material-ui/core";
import StarRating from "../StarRating/StarRating";
import FavList from "../FavList";


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

const StarButton = (data) => {
    const styles = useStyles();

    const [isFav, setFav] = useState(false);

    const initialRender = useRef(true);

    let myList = [];

    useEffect(() => {
        if(initialRender.current){
            initialRender.current = false
        }
        else{
            if(isFav){
                // add object to favs array
                let tempObj = {
                    imgUrl : data.data.imgUrl,
                    imgAlt : data.data.imgAlt,
                    productName : data.data.productName,
                    desc : data.data.desc,
                    price : data.data.price,
                    freeShipping : data.data.freeShipping,
                    price : data.data.price,
                    key : data.data.id
                }
                myList.push(tempObj);
                console.log(myList);
            }
            else{
                //remove element from favs array
                console.log("remove")
            }
        }
        
    }, [isFav])

    return (
        <IconButton onClick={() => {
            setFav(!isFav)
        }} >
            {isFav ? <StarIcon className={styles.starButton} /> : <StarBorderIcon className={styles.starButton} />}
        </IconButton>
    )
}


function Card(props) {

    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '1.rem',
        '@media (min-width:600px)': {
            fontSize: '1.rem',
        },
        [theme.breakpoints.up('md')]: {
        },
    };

    const useStyles = makeStyles({
        textStyle: {
            textDecoration: props.onSale ? 'line-through' : null,
            textDecorationThickness: '1px',
            float: 'left',
            marginRight: '5px',
            marginLeft: '3px'
        },
        divStyle: {
            overflow: 'hidden',
            width: 'auto',
        },
        inlineSaleDiv: {
            height: 'auto',
            width: '50px',
            background: 'linear-gradient(151deg, rgba(167,15,237,1) 12%, rgba(37,12,117,1) 88%)',
            float: 'right',
            marginRight: '20px',
            borderRadius: '20%',
            textAlign: 'center',
            boxShadow: '2px 3px 1px #E9DEFC',
            marginBottom: '10px'
        },
        wrapper: {
            float: 'left'
        },
        saleText: {
            color: 'white',
            display: 'inline-block'

        }

    });

    const classes = useStyles();

    const ActualPrice = () => {

        if (props.onSale) {
            const newPrice = props.price - (props.price * props.saleRate / 100);

            return (
                <div className={classes.divStyle}>
                    <div className={classes.wrapper}>
                        <Typography variant="body2" className={classes.textStyle}>{props.price} </Typography>
                        <Typography variant="body2" className={classes.wrapper}> {newPrice}$</Typography>
                    </div>

                    <div className={classes.inlineSaleDiv}>
                        <a className={classes.saleText}>-{props.saleRate}%</a>
                    </div>
                </div>)
        }

        else {
            return (<Typography variant="body2">{props.price}$</Typography>)
        }

    }

    return (

        <div className="Card">

            <div className="Card-top">
                <img src={props.imgUrl} alt={props.imgAlt} className="imgClass" />
                <div className="favIcon">
                    <div>
                        <StarButton data={props} />
                    </div>
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

            <div>
                <StarRating rate={props.rate}></StarRating>
            </div>


        </div>
    )
}

export default Card;