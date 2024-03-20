import Map from "../../Components/Map/Map";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from './AppLayout.module.css';

const AppLayout = () => {
    return (
        <div className={styles.app}> 
            <Sidebar/>
            <Map/>
        </div>
    );
}

export default AppLayout;