import react from "react";
import reactDOM from "react-dom";
import categories from "../MenuItem/ShopItem";
import "../Header/Header.css";

function createCategory(data) {
    return (
        <li
            className={data.className}
            href={data.link}>
            {data.title}
        </li>
    )
}

function Header() {

    return (
        <div className="category-navbar">
            <ul>
                <div className="category-center">
                    {categories.map(createCategory)}
                </div>
            </ul>
        </div>
    )

}

export default Header;