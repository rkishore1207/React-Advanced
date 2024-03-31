/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link} from 'react-router-dom';
import styles from './CityItem.module.css';
import { useCities } from '../../../Contexts/CitiesContext';

interface CityItemProps{
    city:any
}


const CityItem = ({city}:CityItemProps) => {
    const {currentCity,deleteCity} = useCities();

    const formatDate = (date:any) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

    const {cityName,date,emoji,id,position} = city;

    const handleDelete = (event:any) => {
        event.preventDefault();
        deleteCity(city.id);
    }

    return (
        <li>
            <Link className={`${styles.cityItem} ${currentCity.id === id ? styles['cityItem--active'] : ''}`} to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn} onClick={handleDelete}>&times;</button>
            </Link>
        </li>
    );
}

export default CityItem;




