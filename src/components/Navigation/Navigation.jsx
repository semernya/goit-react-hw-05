import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import { clsx } from "clsx";

const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active)
}

export default function Navigation() {
    return (
        <nav>
            <ul className={css.navList}>
                <li className={css.navListItem}>
                    <NavLink to='/' className={getNavLinkClass}>Home</NavLink>
                </li>
                <li className={css.navListItem}>
                    <NavLink to='/movies' className={getNavLinkClass}>Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
}