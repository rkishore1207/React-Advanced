import { Outlet } from "react-router-dom";
import AppNav from "../AppNav/AppNav";
import Logo from "../Logo/Logo";
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>
            <Outlet/>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copy Right {new Date().getFullYear()} by WorldWise
                </p>
            </footer>
        </div>
    );
}

export default Sidebar;