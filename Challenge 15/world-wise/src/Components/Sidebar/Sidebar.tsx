import AppNav from "../AppNav/AppNav";
import Logo from "../Logo/Logo";
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <Logo/>
            <AppNav/>
            <li>List of Countries</li>
            <footer className={styles.footer}>
                <p className={styles.copyright}>
                    &copy; Copy Right {new Date().getFullYear()} by WorldWise
                </p>
            </footer>
        </div>
    );
}

export default Sidebar;