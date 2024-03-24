/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './CountryItem.module.css';

interface CountryItemProps{
    country:any
}


const CountryItem = ({country}:CountryItemProps) => {

    const {countryName,emoji} = country;

    return (
        <li className={styles.countryItem}>
            <span className={styles.emoji}>{emoji}</span>
            <span className={styles.name}>{countryName}</span>
        </li>
    );
}

export default CountryItem;




