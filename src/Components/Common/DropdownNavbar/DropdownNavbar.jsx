import react from "react";
import { useEffect, useState } from "react";
import "../DropdownNavbar/DropdownNavbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@material-ui/core/IconButton";


const DropdownButton = (props) => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleClick = () => {
        setToggleMenu(!toggleMenu);
        console.log(props.children);
    }

    return (
        <div>
            <IconButton>
                <MenuIcon className="dropdown-btn" 
                onClick={handleClick}/>
            </IconButton>
            {toggleMenu ? props.children : null}
        </div>
    )
}

export {
    DropdownButton
} ;