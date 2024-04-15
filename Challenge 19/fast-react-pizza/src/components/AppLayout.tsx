import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function AppLayout() {
    return (
        <div>
            <Header/>
            <main>
                <h2>Content</h2>
                <Outlet/>
            </main>
            <CartOverview/>
        </div>
    );
}

export default AppLayout;