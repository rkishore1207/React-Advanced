import './Box.css';

interface BoxProps{
    children:any
}

const Box = ({children}:BoxProps) => {
    return (
        <div className="box-style">
            {children}
        </div>
    );
}

export default Box;