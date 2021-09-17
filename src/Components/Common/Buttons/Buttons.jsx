import React from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from '@material-ui/icons/Search';
import StarIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        color: 'rgb(24,0,67)',
        background: 'white',
        '&:hover': {
            background: "rgb(233,216,250);",
        },
        padding: '4px !important',
        height: 26,
        width: 30,
        borderRadius: '0 3px 3px 0',
        marginLeft: '10px',
        top: 0
    },
});

const useStylesNavbar = makeStyles({
    root: {
        color: 'rgb(24,0,67)',
        marginLeft : '-10px',
        paddingRight : '0px',
    }
})

const SearchButton = () => {
    const classes = useStyles();
    const className = clsx(classes.root);

    return (
        <IconButton>
            <SearchIcon className={className} />
        </IconButton>
    )
}

const HomeButton = () => {
    const classesNavbar = useStylesNavbar();
    const classNameNavbar = clsx(classesNavbar.root);

    return (
        <IconButton>
            <HomeIcon className={classNameNavbar} />
        </IconButton>
    )
}

const FavButton = () => {
    const classesNavbar = useStylesNavbar();
    const classNameNavbar = clsx(classesNavbar.root);

    return (
        <IconButton>
            <StarIcon className={classNameNavbar} />
        </IconButton>

    )
}

const ShoppingCartButton = () => {
    const classesNavbar = useStylesNavbar();
    const classNameNavbar = clsx(classesNavbar.root);

    return (
        <IconButton>
            <ShoppingCartIcon className={classNameNavbar} />
        </IconButton>

    )
}

const ProfileButton = () => {
    const classesNavbar = useStylesNavbar();
    const classNameNavbar = clsx(classesNavbar.root);

    return (
        <IconButton>
            <PersonIcon className={classNameNavbar} />
        </IconButton>

    )
}

export {
    SearchButton,
    HomeButton,
    FavButton,
    ShoppingCartButton,
    ProfileButton,
}