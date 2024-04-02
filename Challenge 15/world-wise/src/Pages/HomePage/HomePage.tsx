import { Link } from "react-router-dom";
import PageNav from "../../Components/PageNav/PageNav";
import styles from './HomePage.module.css';
import { useAuth } from "../../Contexts/FakeAuthContext";

const HomePage = () => {

    const{isAuthentication} = useAuth();

    return (
        <div>
            <main className={styles.homepage}>
                <PageNav/>
                <section>
                    <h1>
                    You travel the world.
                    <br />
                    WorldWise keeps track of your adventures.
                    </h1>
                    <h2>
                    A world map that tracks your footsteps into every city you can think
                    of. Never forget your wonderful experiences, and show your friends how
                    you have wandered the world.
                    </h2>
                    <Link to={isAuthentication ? '/app' : '/login'} className="cta">Start Tracking Now</Link>
                </section>
            </main>
        </div>
    );
}

export default HomePage;