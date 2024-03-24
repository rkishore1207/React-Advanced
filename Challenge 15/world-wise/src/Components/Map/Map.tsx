import { useLocation, useNavigate } from 'react-router-dom';
import styles from './Map.module.css';

const Map = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);

    const latitute = searchParams.get('lat');
    const longitude = searchParams.get('lng');

    const changePosition = () => {
        searchParams.set("lat",'20');
        searchParams.set("lng",'30');
        navigate({search:searchParams.toString()});
    }

    return (
        <div className={styles.mapContainer} onClick={()=>navigate('form')}>
            <p>Map</p>
            <p>{latitute},{longitude}</p>
            <button onClick={changePosition}>Change Position</button>
        </div>
    );
};

export default Map;