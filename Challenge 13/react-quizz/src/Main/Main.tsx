import { useEffect } from "react";

interface MainProps{
    children:any
}

const Main = ({children}:MainProps) => {

    return (
        <div>
            {children}
        </div>
    );
}

export default Main;