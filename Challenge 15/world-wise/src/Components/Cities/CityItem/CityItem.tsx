/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './CityItem.module.css';

interface CityItemProps{
    city:any
}


const CityItem = ({city}:CityItemProps) => {


    const formatDate = (date:any) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

    const {cityName,date,emoji} = city;
    console.log(cityName,date,emoji)

    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
}

export default CityItem;




