import styles from "./Logo.module.css";


const Logo = () => {
    return (
        <img src="/logo.png" alt='WorldWise' className={styles.logo} />
    );
}

export default Logo;