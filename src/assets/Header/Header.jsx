import s from "./Header.module.css"
import logo from "../../images/Logo 1.png"
import search from "../../images/search.svg"

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt=""/>
                <select className={s.header__list_select}>
                    <option value="Home">Home</option>
                    <option value="About Us">About Us</option>
                    <optgroup label="Profile">
                        <option value="Favourites">Favorites</option>
                        <option value="Edit Profile">Edit Profile</option>
                    </optgroup>
                    <optgroup label="Recipies">
                        <option value="Categories">Categories</option>
                    </optgroup>
                </select>
                <button className={s.header__btn_search}>
                    <img src={search} alt="" />
                </button>
                <button className={s.header__btn_login}>Login</button>
        </header>
    )
}

export default Header