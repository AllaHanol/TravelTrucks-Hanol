import Logo from '../Logo/Logo';
import css from './Header.module.css';
import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';

const changeLinkClass = ({ isActive }) => {
    return clsx(isActive&&css.active);
}
export default function Header() {
    return (
        <header className={css.header}>
            <div className={css.logo}>
                <Link to="/">
                    <Logo/>
                </Link>
            </div>
            <nav className={css.nav}>
                <NavLink to="/" className={changeLinkClass}>Home</NavLink>
                <NavLink to="/catalog" className={changeLinkClass}>Catalog</NavLink>
            </nav>

            
        </header>
    );
}