import { useParams } from "react-router-dom";
import styles from './City.module.css';

const City = () => {

    const {id} = useParams();


    const searchParams = new URLSearchParams(location.search);
    
    const latitute = searchParams.get('lat');
    const longitude = searchParams.get('lng');



    return (
        <div className={styles.city}>
            <p>City {id} {latitute} {longitude}</p>
        </div>
    );
}

export default City;