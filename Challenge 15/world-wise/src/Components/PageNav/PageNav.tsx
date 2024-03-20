import { Link, NavLink } from "react-router-dom";
import styles from './PageNav.module.css';
import Logo from "../Logo/Logo";

const PageNav = () => {
    return (
        <div className={styles.nav}>
            <Link to='/'><Logo/></Link>
            <ul>
                <li><NavLink to='/pricing'>Pricing</NavLink></li>
                <li><NavLink to='/product'>Product</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
            </ul>
        </div>
    );
}

export default PageNav;