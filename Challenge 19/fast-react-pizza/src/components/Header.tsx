import { Link } from "react-router-dom";
// import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/users/UserName";

function Header() {
    return (
        <div className="bg-yellow-500 p-4">
            <h1 className="uppercase tracking-widest">Fast React Pizza</h1>
            <Link to='/'>To Home</Link>
            <UserName/>
            {/* <SearchOrder/> */}
        </div>
    );
}

export default Header;