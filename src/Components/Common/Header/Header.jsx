import react from "react";
import reactDOM from "react-dom";
import categories from "../MenuItem/ShopItem";
import "../Header/Header.css";

function createCategory(data) {
    return (
        <a
            className={data.className}
            href={data.link}>
            {data.title}
        </a>
    )
}

function Header() {

    return (
        <div className="category-navbar">
            <div className="category-center">
                {categories.map(createCategory)}
            </div>
            <a></a>


        </div>
    )

}

export default Header;