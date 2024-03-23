/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link} from 'react-router-dom';
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

    const {cityName,date,emoji,id,position} = city;

    // const navigatePage = () => {
    //     navigate(`cities/${id}`);
    //     const searchParams = new URLSearchParams(location.search);
    //     searchParams.set("lat",position.lat);
    //     searchParams.set("lng",position.lng);
    //     navigate({search:searchParams.toString()});
    // }

    return (
        <li>
            <Link className={styles.cityItem} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
}

export default CityItem;




