import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Spinner from "./Spinner";

function AppLayout() {
    const data = useNavigation();
    const isLoading = data.state == 'loading';

    return (
        <div>
            {isLoading && <Spinner/>}
            <Header/>
            <main>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    );
}

export default AppLayout;