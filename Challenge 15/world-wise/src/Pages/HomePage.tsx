import { Link } from "react-router-dom";
import PageNav from "../Components/PageNav/PageNav";
import AppNav from "../Components/AppNav/AppNav";

const HomePage = () => {
    return (
        <div>
            <PageNav/>
            <AppNav/>
            <p>HomePage</p>
            <p><Link to='/app'>Go to App</Link></p>
        </div>
    );
}

export default HomePage;