/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from './Button.module.css';

interface ButtonProps{
    children:any,
    type:any,
    onClick:(event:any)=>void
}

const Button = ({children,type,onClick}:ButtonProps) => {
    return (
        <div onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
            {children}
        </div>
    );
}

export default Button;