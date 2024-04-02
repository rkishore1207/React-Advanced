import Map from "../../Components/Map/Map";
import Sidebar from "../../Components/Sidebar/Sidebar";
import User from "../../Components/User/User";
import styles from './AppLayout.module.css';

const AppLayout = () => {
    return (
        <div className={styles.app}> 
            <Sidebar/>
            <Map/>
            <User/>
        </div>
    );
}

export default AppLayout;