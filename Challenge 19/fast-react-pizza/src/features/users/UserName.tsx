/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

function UserName() {

    const user = useSelector((state:any)=>state.user);

    if(!user.userName) return null;

    return (
        <div className="hidden text-sm font-semibold md:block">{user.userName}</div>
    );
}

export default UserName;