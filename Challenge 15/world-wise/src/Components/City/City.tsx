import { useParams } from "react-router-dom";
import styles from './City.module.css';

const City = () => {

    const {id} = useParams();

    return (
        <div className={styles.city}>
            <p>City {id}</p>
        </div>
    );
}

export default City;