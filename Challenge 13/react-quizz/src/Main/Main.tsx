
import './Main.css';

interface MainProps{
    children:any
}

const Main = ({children}:MainProps) => {

    return (
        <div className="app-main">
            {children}
        </div>
    );
}

export default Main;